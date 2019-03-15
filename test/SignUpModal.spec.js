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

  const wrapper = mount(SignUpModal, {
    localVue,
    store
  });

  test("is vue instance", () => {
    // const wrapper = mount(SignUpModal);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders regular", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test("renders active", () => {
    store.commit("auth/setSigningUp", true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
