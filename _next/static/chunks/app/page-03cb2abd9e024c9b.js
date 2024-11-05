(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    9705: function (e, n, r) {
      Promise.resolve().then(r.bind(r, 1538)),
        Promise.resolve().then(r.bind(r, 2434)),
        Promise.resolve().then(r.bind(r, 3671)),
        Promise.resolve().then(r.bind(r, 2184)),
        Promise.resolve().then(r.bind(r, 8866)),
        Promise.resolve().then(r.bind(r, 8134)),
        Promise.resolve().then(r.bind(r, 8784)),
        Promise.resolve().then(r.bind(r, 3713));
    },
    8784: function (e, n, r) {
      "use strict";
      r.d(n, {
        default: function () {
          return l;
        },
      });
      var o = r(7437),
        i = r(2265),
        t = r(1538);
      function l(e) {
        let { imageSrc: n } = e,
          [r, l] = (0, i.useState)(!1),
          [s, a] = (0, i.useState)(1),
          [c, d] = (0, i.useState)(1);
        return ((0, i.useEffect)(() => {
          l(!0);
        }, []),
        (0, i.useEffect)(() => {
          if (!r) return;
          let e = 0.4 * Math.min(window.innerWidth, window.innerHeight);
          a(e), d(1.05 * e);
        }, [r]),
        r)
          ? (0, o.jsx)(t.default, {
              className: "display-picture-wrapper",
              style: {
                width: c,
                height: c,
                borderRadius: c / 2,
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              },
              children: (0, o.jsx)("img", {
                src: n,
                className: "display-picture",
                style: { width: s, height: s, borderRadius: s / 2 },
              }),
            })
          : null;
      }
    },
    3713: function (e, n, r) {
      "use strict";
      r.r(n),
        r.d(n, {
          default: function () {
            return u;
          },
        });
      var o = r(7437),
        i = r(1538),
        t = r(6548),
        l = r(335),
        s = r(3987),
        a = r(5602),
        c = r(2853),
        d = r(9721);
      function u(e) {
        let { socialMediaProfiles: n, showViewResume: r } = e;
        return (0, o.jsxs)(i.default, {
          sx: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          },
          children: [
            (0, o.jsx)(i.default, {
              sx: {
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              },
              children: n.map((e) =>
                "LinkedIn" === e.network_name
                  ? (0, o.jsx)(
                      l.Z,
                      {
                        onClick: () => window.open(e.profile_url, "_blank"),
                        sx: {
                          color: "#0077B5",
                          backgroundColor: "#FFA500",
                          marginRight: 1,
                          "&:hover": { backgroundColor: "lightgreen" },
                        },
                        children: (0, o.jsx)(s.Z, {
                          fontSize: "large",
                          color: "warning",
                          sx: { color: "black" },
                        }),
                      },
                      e.network_name,
                    )
                  : "Twitter" === e.network_name
                    ? (0, o.jsx)(
                        l.Z,
                        {
                          onClick: () => window.open(e.profile_url, "_blank"),
                          sx: {
                            color: "#000000",
                            backgroundColor: "#FFA500",
                            marginRight: 1,
                            "&:hover": { backgroundColor: "lightgreen" },
                          },
                          children: (0, o.jsx)(a.Z, { fontSize: "large" }),
                        },
                        e.network_name,
                      )
                    : "X" === e.network_name
                      ? (0, o.jsx)(
                          l.Z,
                          {
                            onClick: () => window.open(e.profile_url, "_blank"),
                            sx: {
                              color: "#000000",
                              backgroundColor: "#FFA500",
                              marginRight: 1,
                              "&:hover": { backgroundColor: "lightgreen" },
                            },
                            children: (0, o.jsx)(c.Z, { fontSize: "large" }),
                          },
                          e.network_name,
                        )
                      : "GitHub" === e.network_name
                        ? (0, o.jsx)(
                            l.Z,
                            {
                              onClick: () =>
                                window.open(e.profile_url, "_blank"),
                              sx: {
                                color: "#000000",
                                backgroundColor: "#FFA500",
                                marginRight: 1,
                                "&:hover": { backgroundColor: "lightgreen" },
                              },
                              children: (0, o.jsx)(d.Z, { fontSize: "large" }),
                            },
                            e.network_name,
                          )
                        : null,
              ),
            }),
            r &&
              (0, o.jsx)(i.default, {
                sx: {
                  width: "100%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 2,
                },
                children: (0, o.jsx)(t.Z, {
                  onClick: () =>
                    window.open(
                      "/data/Abhilaksh_Singh_Reen-Resume.pdf",
                      "_blank",
                    ),
                  variant: "contained",
                  sx: {
                    backgroundColor: "#FFA500",
                    "&:hover": { backgroundColor: "lightgreen" },
                  },
                  children: "View R\xe9sum\xe9",
                }),
              }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [964, 430, 971, 23, 744], function () {
      return e((e.s = 9705));
    }),
      (_N_E = e.O());
  },
]);
