module.exports = {
  docs: [
    {
      type: "category",
      label: "Installation",
      items: [
        "installation/raspberry-pi",
        "installation/docker",
        "installation/macos-windows",
        "installation/freebox-delta",
        "installation/faq",
      ],
    },
    {
      type: "category",
      label: "Integrations",
      items: [
        "integrations/openweather",
        "integrations/caldav",
        "integrations/camera",
        "integrations/xiaomi",
        "integrations/bluetooth",
        "integrations/sonoff",
        "integrations/tasmota",
        "integrations/tp-link",
        "integrations/philips-hue",
        "integrations/mqtt",
        "integrations/owntracks",
        "integrations/zigbee2mqtt",
        "integrations/zwave",
        "integrations/telegram",
      ],
    },
    {
      type: "category",
      label: "Scene",
      items: [
        "scenes/intro",
        "scenes/device-state-changed-trigger",
        "scenes/scheduled-trigger",
        "scenes/turn-on-off-the-switches-action",
        "scenes/get-last-device-state-action",
        "scenes/wait-action",
        "scenes/continue-only-if-action",
        "scenes/send-a-message-action",
        "scenes/turn-on-off-the-lights-action",
        "scenes/http-request",
        "scenes/user-presence",
        "scenes/house-empty",
        "scenes/house-no-longer-empty",
        "scenes/back-at-home",
        "scenes/left-home",
        "scenes/time-condition",
      ],
    },
    {
      type: "category",
      label: "Dashboard",
      items: [
        "dashboard/intro",
        "dashboard/weather",
        "dashboard/temperature-in-room",
        "dashboard/camera",
        "dashboard/devices-in-room",
      ],
    },
    {
      type: "category",
      label: "API",
      items: [
        "api/architecture",
        "api/data-model",
        "api/rest-api",
        "api/mqtt-api",
      ],
    },
    {
      type: "category",
      label: "Development",
      items: [
        "dev/setup-development-environment-mac-linux",
        "dev/setup-development-environment-windows",
        "dev/developing-a-service",
        "dev/cypress-tests",
      ],
    },
    {
      type: "category",
      label: "Gladys Plus",
      items: ["plus/intro", "plus/open-api"],
    },
  ],
};
