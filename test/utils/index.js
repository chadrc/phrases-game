import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import Vuex from "vuex";
import * as authStoreModule from "@/store/auth";

export const makeVueMock = (C, { shallow = false, propsData } = {}) => {
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

  let wrapper;

  if (shallow) {
    wrapper = shallowMount(C, {
      localVue,
      store,
      propsData
    });
  } else {
    wrapper = mount(C, {
      localVue,
      store,
      propsData
    });
  }

  return { wrapper, store };
};
