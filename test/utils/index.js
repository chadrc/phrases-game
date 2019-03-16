import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import * as authStoreModule from "@/store/auth";

export const makeVueMock = (C, propsData) => {
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

  const wrapper = mount(C, {
    localVue,
    store,
    propsData
  });

  return { wrapper, store };
};
