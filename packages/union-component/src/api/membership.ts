import { DEFAULT_ERROR } from '../constants/errors';
import { MembershipMachineContext } from '../machines/membershipMachine';

const DONATION_API_URL = (window as any).DC_DONATE_API_URL;
const RECAPTCHA_V3_SITE_KEY = (window as any).DC_RECAPTCHA_V3_SITE_KEY;

interface DonationResponse {
  status: 'failed' | 'succeeded';
  errors?: Array<string>;
  message?: string;
}

export const sendMembershipDonation = async (
  context: MembershipMachineContext
) => {
  const { personalInformation, addressInformation, paymentServices } = context;
  const amount = context.donationMonthlyAmount;
  const grecaptcha = (window as any).grecaptcha;
  const isZeroDollarDonation = amount === 0;
  const isMissingStripeToken =
    !isZeroDollarDonation && !paymentServices.stripeToken?.id;
  let recaptchaToken;

  if (!grecaptcha || isMissingStripeToken) {
    throw new Error(DEFAULT_ERROR);
  }

  try {
    recaptchaToken = await grecaptcha.execute(RECAPTCHA_V3_SITE_KEY, {
      action: 'membership'
    });
  } catch (error) {
    console.error(error);
    throw new Error(DEFAULT_ERROR);
  }

  const data = {
    'g-recaptcha-response-data': recaptchaToken,
    subscription: {
      address_city: addressInformation.city,
      address_country_code: addressInformation.country,
      address_line1: addressInformation.street,
      address_zip: addressInformation.zipCode,
      amount,
      chapter: personalInformation.chapter,
      phone_number: personalInformation.phoneNumber,
      email: personalInformation.email,
      name: `${personalInformation.firstName} ${personalInformation.lastName}`,
      stripe_token: paymentServices.stripeToken?.id,
      stripe_card_id: paymentServices.stripeToken?.card?.id
    }
  };

  const response: DonationResponse = await fetch(DONATION_API_URL, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => res.json());

  if (response.status === 'failed') {
    console.error(response.errors);
    throw new Error(response.message);
  }

  return response;
};
