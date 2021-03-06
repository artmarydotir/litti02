(this.webpackJsonpgitcard = this.webpackJsonpgitcard || []).push([
  [0],
  {
    100: function (e, t, a) {
      'use strict';
      a.r(t);
      var r = a(0),
        n = a.n(r),
        s = a(8),
        i = a.n(s),
        o = (a(76), a(61)),
        l = a(30),
        u = a(31),
        c = a(36),
        h = a(35),
        m = a(59),
        p = a(21),
        g = a(137),
        b = a(139),
        d = a(143),
        f = a(134),
        v = a(141),
        _ = a(140),
        E = a(144),
        w = a(142),
        y = Object(f.a)({
          root: { maxWidth: 345, margin: '12px 18px' },
          media: { height: 180 },
        });
      function j(e) {
        var t = e,
          a = y();
        return n.a.createElement(
          g.a,
          { className: a.root },
          n.a.createElement(
            b.a,
            null,
            n.a.createElement(_.a, {
              className: a.media,
              image: t.avatar_url,
              title: t.name,
            }),
            n.a.createElement(
              v.a,
              null,
              n.a.createElement(
                w.a,
                { gutterBottom: !0, variant: 'h5', component: 'h2' },
                t.name
              ),
              n.a.createElement(
                w.a,
                { variant: 'body2', color: 'textSecondary', component: 'p' },
                t.bio
              )
            )
          ),
          n.a.createElement(
            d.a,
            null,
            n.a.createElement(
              E.a,
              { size: 'small', color: 'primary', href: t.url },
              'See Profile'
            ),
            n.a.createElement(
              E.a,
              { size: 'small', color: 'secondary' },
              'public repos: ',
              t.public_repos
            )
          )
        );
      }
      var N = a(145),
        x = Object(f.a)({ root: { flexGrow: 1 } });
      var O = function (e) {
          return (
            x(),
            n.a.createElement(
              N.a,
              {
                container: !0,
                direction: 'column',
                justify: 'center',
                alignItems: 'center',
                spacing: 3,
              },
              n.a.createElement(
                N.a,
                { container: !0, item: !0, xs: 12 },
                e.profiles.map(function (e) {
                  return n.a.createElement(
                    j,
                    Object.assign({}, e, { key: e.id })
                  );
                })
              )
            )
          );
        },
        C = a(38),
        S = a.n(C),
        z = a(57),
        M = a(149),
        k = a(58),
        A = a.n(k),
        T = (function (e) {
          Object(c.a)(a, e);
          var t = Object(h.a)(a);
          function a() {
            var e;
            Object(l.a)(this, a);
            for (var r = arguments.length, n = new Array(r), s = 0; s < r; s++)
              n[s] = arguments[s];
            return (
              ((e = t.call.apply(t, [this].concat(n))).state = {
                userName: '',
              }),
              (e.handleSubmit = (function () {
                var t = Object(z.a)(
                  S.a.mark(function t(a) {
                    var r;
                    return S.a.wrap(function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if (
                              (a.preventDefault(),
                              console.log(e.state.userName),
                              !e.state.userName)
                            ) {
                              t.next = 10;
                              break;
                            }
                            return (
                              (t.next = 5),
                              A.a.get(
                                'https://api.github.com/users/'.concat(
                                  e.state.userName
                                )
                              )
                            );
                          case 5:
                            (r = t.sent),
                              e.props.handleNewProfile(r.data),
                              e.setState({ userName: '' }),
                              (t.next = 11);
                            break;
                          case 10:
                            alert('empty string? really?');
                          case 11:
                          case 'end':
                            return t.stop();
                        }
                    }, t);
                  })
                );
                return function (e) {
                  return t.apply(this, arguments);
                };
              })()),
              e
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'render',
                value: function () {
                  var e = this;
                  return n.a.createElement(
                    'form',
                    {
                      action: '',
                      onSubmit: this.handleSubmit,
                      noValidate: !0,
                      autoComplete: 'off',
                    },
                    n.a.createElement(M.a, {
                      variant: 'outlined',
                      label: 'Github Username',
                      value: this.state.userName,
                      onChange: function (t) {
                        return e.setState({ userName: t.target.value });
                      },
                    }),
                    n.a.createElement(
                      E.a,
                      { type: 'submit', color: 'primary', variant: 'outlined' },
                      'Add New Card'
                    )
                  );
                },
              },
            ]),
            a
          );
        })(r.Component),
        D = a(146),
        P = a(147),
        B = Object(f.a)({
          centerBtn: { textAlign: 'center', margin: '0 auto' },
          barHeight: { padding: '10px 0' },
        });
      function G() {
        var e = B();
        return n.a.createElement(
          'div',
          null,
          n.a.createElement(
            D.a,
            { position: 'static', color: 'secondary' },
            n.a.createElement(
              P.a,
              { className: e.barHeight },
              n.a.createElement(
                w.a,
                { variant: 'h4', color: 'inherit', className: e.centerBtn },
                'The Github Cards'
              )
            )
          )
        );
      }
      var I = a(148),
        Z = [
          {
            avatar_url: 'https://avatars0.githubusercontent.com/u/11363931?v=4',
            bio: '/* no bio */',
            blog: '',
            company: null,
            html_url: 'https://github.com/artmarydotir',
            id: 11363931,
            name: 'Art Mary',
            public_repos: 37,
            url: 'https://api.github.com/users/artmarydotir',
          },
          {
            login: 'shentao',
            id: 3737591,
            node_id: 'MDQ6VXNlcjM3Mzc1OTE=',
            avatar_url: 'https://avatars0.githubusercontent.com/u/3737591?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/shentao',
            html_url: 'https://github.com/shentao',
            followers_url: 'https://api.github.com/users/shentao/followers',
            following_url:
              'https://api.github.com/users/shentao/following{/other_user}',
            gists_url: 'https://api.github.com/users/shentao/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/shentao/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/shentao/subscriptions',
            organizations_url: 'https://api.github.com/users/shentao/orgs',
            repos_url: 'https://api.github.com/users/shentao/repos',
            events_url: 'https://api.github.com/users/shentao/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/shentao/received_events',
            type: 'User',
            site_admin: !1,
            name: 'Damian Dulisz',
            company: '@vuejs',
            blog: 'https://dulisz.com',
            location: 'Wroc\u0142aw',
            email: null,
            hireable: null,
            bio:
              '@vuejs core team. Lead Engineer at Coursedog.\r\nCurator of news.vuejs.org. Coffee lover. Occasional photographer.',
            public_repos: 49,
            public_gists: 3,
            followers: 710,
            following: 4,
            created_at: '2013-03-01T11:46:16Z',
            updated_at: '2020-04-07T11:28:19Z',
          },
          {
            login: 'mhf-ir',
            id: 1172526,
            node_id: 'MDQ6VXNlcjExNzI1MjY=',
            avatar_url: 'https://avatars1.githubusercontent.com/u/1172526?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/mhf-ir',
            html_url: 'https://github.com/mhf-ir',
            followers_url: 'https://api.github.com/users/mhf-ir/followers',
            following_url:
              'https://api.github.com/users/mhf-ir/following{/other_user}',
            gists_url: 'https://api.github.com/users/mhf-ir/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/mhf-ir/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/mhf-ir/subscriptions',
            organizations_url: 'https://api.github.com/users/mhf-ir/orgs',
            repos_url: 'https://api.github.com/users/mhf-ir/repos',
            events_url: 'https://api.github.com/users/mhf-ir/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/mhf-ir/received_events',
            type: 'User',
            site_admin: !1,
            name: 'Muhammad Hussein Fattahizadeh',
            company: '@AASAAM ',
            blog: 'http://mhf.ir/',
            location: 'Iran, Tehran',
            email: null,
            hireable: null,
            bio: null,
            public_repos: 28,
            public_gists: 7,
            followers: 32,
            following: 84,
            created_at: '2011-11-04T14:19:36Z',
            updated_at: '2020-02-01T20:14:58Z',
          },
        ],
        H = (function (e) {
          Object(c.a)(a, e);
          var t = Object(h.a)(a);
          function a(e) {
            var r;
            return (
              Object(l.a)(this, a),
              ((r = t.call(this, e)).addNewProfile = function (e) {
                console.log(e),
                  r.setState(function (t) {
                    return {
                      profiles: [].concat(Object(o.a)(t.profiles), [e]),
                    };
                  });
              }),
              (r.state = { profiles: Z }),
              r
            );
          }
          return (
            Object(u.a)(a, [
              {
                key: 'render',
                value: function () {
                  return n.a.createElement(
                    m.a,
                    null,
                    n.a.createElement(
                      'div',
                      null,
                      n.a.createElement(
                        p.a,
                        { exact: !0, path: '/' },
                        n.a.createElement(
                          I.a,
                          { maxWidth: 'xl' },
                          n.a.createElement(G, null),
                          n.a.createElement(T, {
                            handleNewProfile: this.addNewProfile,
                          }),
                          n.a.createElement(O, {
                            profiles: this.state.profiles,
                          })
                        )
                      )
                    )
                  );
                },
              },
            ]),
            a
          );
        })(n.a.Component);
      i.a.render(
        n.a.createElement(
          n.a.StrictMode,
          null,
          n.a.createElement(H, { title: 'The Github Cards' })
        ),
        document.getElementById('root')
      );
    },
    71: function (e, t, a) {
      e.exports = a(100);
    },
    76: function (e, t, a) {},
  },
  [[71, 1, 2]],
]);
//# sourceMappingURL=main.75f3a08c.chunk.js.map
