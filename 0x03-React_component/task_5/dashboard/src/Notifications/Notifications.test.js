import React from "react";
import { render } from "@testing-library/react";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  test("does not rerender with the same list", () => {
    const listNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
      { id: 3, type: "urgent", value: "Notification 3" },
    ];

    const { rerender } = render(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );

    const firstRender = document.querySelector(".Notifications").innerHTML;

    // Rerender with the same list
    rerender(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
      />
    );
    const secondRender = document.querySelector(".Notifications").innerHTML;

    expect(firstRender).toEqual(secondRender);
  });

  test("rerenders with a longer list", () => {
    const initialListNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
      { id: 3, type: "urgent", value: "Notification 3" },
    ];

    const updatedListNotifications = [
      { id: 1, type: "default", value: "Notification 1" },
      { id: 2, type: "urgent", value: "Notification 2" },
      { id: 3, type: "urgent", value: "Notification 3" },
      { id: 4, type: "default", value: "Notification 4" },
    ];

    const { rerender } = render(
      <Notifications
        displayDrawer={true}
        listNotifications={initialListNotifications}
      />
    );

    const firstRender = document.querySelector(".Notifications").innerHTML;

    // Rerender with a longer list
    rerender(
      <Notifications
        displayDrawer={true}
        listNotifications={updatedListNotifications}
      />
    );
    const secondRender = document.querySelector(".Notifications").innerHTML;

    expect(firstRender).not.toEqual(secondRender);
  });
});
