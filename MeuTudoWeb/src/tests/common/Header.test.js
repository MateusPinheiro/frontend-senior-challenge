import React from "react";
import { mount } from "enzyme";
import Header from "app/common/components/Header";

describe("mounting <Header /> component", () => {
  it("I create a Header component", () => {
    const wrapper = mount(<Header />);
    
    wrapper.html()
  });
});
