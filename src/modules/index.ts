import { extendModule } from "@vue-storefront/core/lib/module";
import { VueStorefrontModule } from "@vue-storefront/core/lib/module";
import { Catalog } from "@vue-storefront/core/modules/catalog";
import { Cart } from "@vue-storefront/core/modules/cart";
import { Checkout } from "@vue-storefront/core/modules/checkout";
import { Compare } from "@vue-storefront/core/modules/compare";
import { Review } from "@vue-storefront/core/modules/review";
import { Mailer } from "@vue-storefront/core/modules/mailer";
import { Wishlist } from "@vue-storefront/core/modules/wishlist";
// import { Mailchimp } from "../modules/mailchimp";
import { Notification } from "@vue-storefront/core/modules/notification";
import { RecentlyViewed } from "@vue-storefront/core/modules/recently-viewed";
import { Url } from "@vue-storefront/core/modules/url";
import { Homepage } from "./homepage";
import { Claims } from "./claims";
// import { PromotedOffers } from "./promoted-offers";
import { Ui } from "./ui-store";
// import { GoogleAnalytics } from './google-analytics';
// import { Hotjar } from './hotjar';
import { PaymentBackendMethods } from "./payment-backend-methods";
import { PaymentCashOnDelivery } from "./payment-cash-on-delivery";
import { RawOutputExample } from "./raw-output-example";
// import { Magento2CMS } from "./magento-2-cms";
import { InstantCheckout } from "./instant-checkout";
import { FacebookPixel } from "./vsf-facebook-pixel";
import { ZendChat } from "./vsf-zend-chat";
import { Klaviyo } from "./vsf-klaviyo";
import { VsfYotpo } from "./vsf-yotpo";
import { PrismicInjector } from "./prismic-injector";
import { OrderHistory } from "./order-history";
import { googleTagManager } from "./google-tag-manager";
import { MagentoMenus } from "./magento-menus";

import { extendMappingFallback } from "src/modules/vsf-mapping-fallback";
import {
  forProduct,
  forCategory,
  forCmsPage,
  tap
} from "src/modules/vsf-mapping-fallback/builtin";

extendMappingFallback(forProduct, forCategory, forCmsPage, tap);

import { productExtend } from "./extended-product";
extendModule(productExtend);

import { categoryExtend } from "./extended-category";
extendModule(categoryExtend);

// import { Example } from './module-template'

// This is how you can extend any of VS modues
// const extendCartVuex = {
//   actions: {
//     load () {
//       Logger.info('New load function')()
//     }
//   }
//  }

//  const cartExtend = {
//   key: 'cart',
//   afterRegistration: function(isServer, config) {
//     Logger.info('New afterRegistration hook')()
//   },
//   store: { modules: [{ key: 'cart', module: extendCartVuex }] },
//  }

// END

/**
 * Some of the modules are registered lazily only when components from the module are appearing on current page.
 * If you want to use this module in pages without its components you need to remember about registering module first
 * In VS 1.8 this modules will be seamlessly lazyLoaded after proper action dispatch
 * - Wishlist
 */
export const registerModules: VueStorefrontModule[] = [
  Checkout,
  Catalog,
  Cart,
  Compare,
  Review,
  Mailer,
  Wishlist,
  // Newsletter,
  Notification,
  Ui,
  RecentlyViewed,
  Homepage,
  Claims,
  // PromotedOffers,
  googleTagManager,
  // GoogleAnalytics,
  // Hotjar,
  PaymentBackendMethods,
  PaymentCashOnDelivery,
  RawOutputExample,
  InstantCheckout,
  Url,
  FacebookPixel,
  ZendChat,
  Klaviyo,
  PrismicInjector,
  VsfYotpo,
  OrderHistory,
  MagentoMenus
  // Example
];
