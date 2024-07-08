function setTheme(theme) {
  const iframe = document.getElementById("storybook-preview-iframe");
  if (iframe) {
    const iframeDocument =
      iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.body.setAttribute("data-theme", theme);
  }
  document.body.setAttribute("data-theme", theme);
}

function initializeThemeToggle() {
  const channel = window.__STORYBOOK_ADDONS_CHANNEL__;
  setTheme(
    localStorage.getItem("sb-addon-themes-3") === "true" ? "dark" : "light",
  );
  channel.on("DARK_MODE", (isDark) => {
    setTheme(isDark ? "dark" : "light");
  });
}

if (document.readyState === "complete") {
  initializeThemeToggle();
} else {
  window.addEventListener("load", initializeThemeToggle);
}
