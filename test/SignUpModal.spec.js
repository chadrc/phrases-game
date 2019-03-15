import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import SignUpModal from "@/components/SignUpModal.vue";
import * as authStoreModule from "@/store/auth";

describe("Index", () => {
  const localVue = createLocalVue();
  localVue.use(Vuex);
  const store = new Vuex.Store({
    modules: {
      auth: {
        namespaced: true,
        ...authStoreModule
      }
    }
  });
  // const routes = [{ path: "/foo", component: Foo }];
  // const router = new VueRouter({
  //   routes
  // });
  const wrapper = mount(SignUpModal, {
    localVue,
    store
    // router
  });

  test("is vue instance", () => {
    // const wrapper = mount(SignUpModal);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders regular", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
