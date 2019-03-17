import MenuBar from "@/components/MenuBar.vue";
import { makeVueMock } from "@/test/utils";

describe("MenuBar", () => {
  const { wrapper, store } = makeVueMock(MenuBar, {
    shallow: true
  });

  test("is vue instance", () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders regular", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  test("has user", () => {
    store.commit("auth/setCurrentUser", { id: "123", username: "PandaBear" });
    expect(wrapper.element).toMatchSnapshot();
  });

  test("has user - signing out", () => {
    store.commit("auth/setCurrentUser", { id: "123", username: "PandaBear" });
    store.commit("auth/setSendingSignOut", true);
    expect(wrapper.element).toMatchSnapshot();
  });
});
