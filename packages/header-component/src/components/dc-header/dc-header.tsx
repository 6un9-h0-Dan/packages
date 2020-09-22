import {
  Component,
  Prop,
  State,
  h,
  Watch,
  getAssetPath,
  Host,
  Listen
} from "@stencil/core";
import { syncCurrentUser } from "../../services/session";
import "./dc-menu";
import "./dc-user-items";
import { loginURL } from "../../utils/community";

type User = {
  id: number;
  admin: boolean;
  avatar_template: string;
  username: string;
  unread_notifications: number;
  unread_high_priority_notifications: number;
};

@Component({
  assetsDirs: ["assets"],
  tag: "dc-header",
  styleUrl: "dc-header.css",
  shadow: true
})
export class Header {
  /**
   * The links you need to display within the header
   * this string needs to be JSON (able to JSON.parse)
   */
  @Prop() links: string;

  /**
   * Link to follow in order to prompt user to donate
   */
  @Prop() donateurl: string = "https://membership.debtcollective.org";

  /**
   * URL to the community
   * without the latest "/"
   */
  @Prop() community: string = "https://community.debtcollective.org";
  
  /**
   * URL to the member hub page
   */
  @Prop() memberhuburl?: string = "https://debtcollective.org/hub";

  /**
   * URL to the component host
   * without the latest "/"
   */
  @Prop() host: string;

  /**
   * Logo src to use a custom image for the header
   */
  @Prop() logo: string;

  /**
   * Logo small src to use a custom image for the header in mobile
   */
  @Prop() logosmall: string;

  /**
   * An object with the user data. Follows Discourse structure as
   * https://docs.discourse.org/#tag/Users/paths/~1users~1{username}.json/get
   */
  @State() user?: User;

  /**
   * Wether or not the menu is displayed
   */
  @State() isMenuOpen: boolean;

  /**
   * Logo image
   */
  private _logo = "logo.png";
  private _logoSmall = "logo-small.png";

  /**
   * Host the value of "links" parsed to an actual Array
   */
  private _links: Array<{ text: string; href: string }>;

  @Watch("links")
  linksDidChangeHandler(newValue) {
    if (!newValue) {
      this._links = [];
      return;
    }

    this._links = JSON.parse(newValue);
  }

  @Watch("user")
  userDidChage(newUser) {
    if (newUser) {
      this._links.unshift({
        text: 'Member hub',
        href: this.memberhuburl
      })
    }
  }

  @Listen("toggleMenu")
  toggleMenuHandler() {
    this.toggleMenu();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  async syncCurrentUser() {
    const user = await syncCurrentUser(this.community);

    this.user = user;
  }

  componentWillLoad() {
    this.linksDidChangeHandler(this.links);
    return this.syncCurrentUser();
  }

  render() {
    const user = this.user;

    return (
      <Host>
        <header class="header">
          <a class="logo-link d-md-flex" href="/">
            <img
              class="logo"
              src={this.logo || getAssetPath(`./assets/${this._logo}`)}
              alt="The Debtcollective"
            />
          </a>
          <button
            class="btn-transparent logo-link d-md-none"
            onClick={this.toggleMenuHandler.bind(this)}
          >
            <img
              class="logo"
              src={this.logosmall || getAssetPath(`./assets/${this._logoSmall}`)}
              alt="The Debtcollective"
            />
            <span class="material-icons ml-1">keyboard_arrow_right</span>
          </button>
          <nav class="nav">
            <slot name="header">
              {this._links.map(({ text, href }) => (
                <div class="nav-item d-md-flex">
                  <a class="nav-link" href={href}>
                    {text}
                  </a>
                </div>
              ))}
            </slot>
          </nav>
          <div class="session-items">
            {user ? (
              <dc-user-items user={user} community={this.community} />
            ) : (
              <div class="session-links">
                <a href={loginURL({ community: this.community, host: this.host })} class="btn btn-outline">
                  <span class="d-md-flex">Member</span>&nbsp;Login
                </a>
                <a href={this.donateurl} class="btn btn-primary">
                  Donate
                </a>
              </div>
            )}
          </div>
        </header>
        <dc-menu open={this.isMenuOpen} logo={this.logo}>
          <slot name="menu">
            {this._links.map(({ text, href }) => (
              <div class="nav-item">
                <a class="nav-link" href={href}>
                  {text}
                </a>
              </div>
            ))}
          </slot>
        </dc-menu>
      </Host>
    );
  }
}
