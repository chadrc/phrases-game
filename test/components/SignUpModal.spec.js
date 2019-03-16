import SignUpModal from "@/components/SignUpModal.vue";
import { makeVueMock } from "@/test/utils";

describe("SignUpModal", () => {
  const { wrapper, store } = makeVueMock(SignUpModal);

  test("is vue instance", () => {
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
