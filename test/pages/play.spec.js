import { mount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import PlayView from "@/pages/play.vue";
import * as authStoreModule from "@/store/auth";

describe("Play View", () => {
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

  const wrapper = mount(PlayView, {
    localVue,
    store
  });

  test("is vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders regular", () => {
    expect(wrapper.element).toMatchSnapshot();
  });
});
