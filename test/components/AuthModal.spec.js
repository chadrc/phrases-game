import AuthModal from "@/components/AuthModal.vue";
import { makeVueMock } from "@/test/utils";

describe("SignUpModal", () => {
  test("is vue instance", () => {
    const { wrapper } = makeVueMock(AuthModal, {
      title: "Auth Modal",
      submitText: "Submit"
    });

    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  test("renders regular", () => {
    const { wrapper } = makeVueMock(AuthModal, {
      title: "Auth Modal",
      submitText: "Submit"
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("renders active", () => {
    const { wrapper } = makeVueMock(AuthModal, {
      title: "Auth Modal",
      submitText: "Submit",
      active: true
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  test("custom cancel text", () => {
    const { wrapper } = makeVueMock(AuthModal, {
      title: "Auth Modal",
      submitText: "Submit",
      cancelText: "Don't Submit"
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
