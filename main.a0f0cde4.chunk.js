(this["webpackJsonpyfdai-staking"] = this["webpackJsonpyfdai-staking"] || []).push([
    [0], {
        23: function (e, t, a) {
            e.exports = a(35)
        },
        35: function (e, t, a) {
            "use strict";
            a.r(t);
            var n = a(0),
                l = a.n(n),
                r = a(13),
                i = a.n(r),
                s = a(14),
                c = a(5),
                o = a.n(c),
                m = a(6),
                d = a(7),
                u = a(8),
                h = a(9),
                p = a(11),
                b = a(2),
                f = a(10);
            var E = function (e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                if (isNaN(Number(e))) return "...";
                var a = new Intl.NumberFormat,
                    n = Number(e).toFixed(t).split("."),
                    l = Object(f.a)(n, 2),
                    r = l[0],
                    i = l[1];
                return r = a.format(r), 0 === t ? r : r + "." + i
            };
            a(18), a(21);
            var g = window,
                v = g.yfdai,
                w = g.yfdai_staking,
                N = g.BigNumber,
                k = function (e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(d.a)(this, a), (n = t.call(this, e)).handleDeposit = function (e) {
                            e.preventDefault();
                            var t = n.state.depositAmount;
                            t = new N(t).times(1e18).toFixed(0), w.depositYfDAI(t)
                        }, n.handleWithdraw = function (e) {
                            e.preventDefault();
                            var t = n.state.withdrawAmount;
                            t = new N(t).times(1e18).toFixed(0), w.withdraw(t)
                        }, n.handleClaimDivs = function (e) {
                            e.preventDefault(), w.claimDivs()
                        }, n.handleSetMaxDeposit = function (e) {
                            e.preventDefault(), n.setState({
                                depositAmount: new N(n.state.yfdai_balance).div(1e18).toFixed(18)
                            })
                        }, n.handleSetMaxWithdraw = function (e) {
                            e.preventDefault(), n.setState({
                                withdrawAmount: new N(n.state.depositedTokens).div(1e18).toFixed(18)
                            })
                        }, n.refreshBalance = Object(m.a)(o.a.mark((function e() {
                            var t, a, l, r, i, s, c, m, d, u, h, p, b, E, g, N, k;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, window.getCoinbase();
                                    case 2:
                                        return t = e.sent, n.setState({
                                            coinbase: t
                                        }), e.prev = 4, a = v.balanceOf(t), l = w.getPendingDivs(t), r = w.cliffTime(), i = w.totalEarnedTokens(t), s = w.stakingTime(t), c = w.depositedTokens(t), m = w.lastClaimedTime(t), e.next = 14, Promise.all([a, l, r, i, s, c, m]);
                                    case 14:
                                        d = e.sent, u = Object(f.a)(d, 7), h = u[0], p = u[1], b = u[2], E = u[3], g = u[4], N = u[5], k = u[6], n.setState({
                                            yfdai_balance: h,
                                            pendingDivs: p,
                                            cliffTime: b,
                                            totalEarnedTokens: E,
                                            stakingTime: g,
                                            depositedTokens: N,
                                            lastClaimedTime: k
                                        }), e.next = 29;
                                        break;
                                    case 26:
                                        e.prev = 26, e.t0 = e.catch(4), console.error(e.t0);
                                    case 29:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [4, 26]
                            ])
                        }))), n.state = {
                            yfdai_balance: "",
                            pendingDivs: "",
                            totalEarnedTokens: "",
                            cliffTime: "",
                            stakingTime: "",
                            depositedTokens: "",
                            lastClaimedTime: "",
                            depositAmount: "",
                            withdrawAmount: "",
                            coinbase: ""
                        }, n
                    }
                    return Object(u.a)(a, [{
                        key: "componentDidMount",
                        value: function () {
                            this.refreshBalance(), window.yfdai_refreshBalInterval = setInterval(this.refreshBalance, 3e3)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function () {
                            clearInterval(window.yfdai_refreshBalInterval)
                        }
                    }, {
                        key: "render",
                        value: function () {
                            var e = this,
                                t = this.state,
                                a = t.yfdai_balance,
                                n = t.pendingDivs,
                                r = t.totalEarnedTokens,
                                i = t.depositedTokens,
                                s = t.cliffTime,
                                c = t.stakingTime,
                                o = t.coinbase;
                            a = new N(a).div(1e18).toString(10), a = E(a, 6), n = new N(n).div(1e18).toString(10), n = E(n, 6), r = new N(r).div(1e18).toString(10), r = E(r, 6), i = new N(i).div(1e18).toString(10), i = E(i, 6), s *= 1e3, c *= 1e3;
                            var m = !0;
                            return isNaN(s) || isNaN(c) || Date.now() - c <= s && (m = !1), l.a.createElement("div", {
                                className: "yfdai-staking "
                            },
                                                        l.a.createElement(
                                                            "div",
                                                            { className: "box-header" },
                                                            l.a.createElement(
                                                                "div",
                                                                { className: "box-headerLogo" },
                                                                //"B26"
                                                                l.a.createElement("img", { src: "./images/B26logo.png" })
                                                            ),
                                                            l.a.createElement(
                                                                "div",
                                                                { className: "headerLinks" },
                                                                l.a.createElement(
                                                                "a",
                                                                {  href:"https://etherscan.io/address/0x481de76d5ab31e28a33b0ea1c1063adcb5b1769a", target:'_blank' },
                                                                "Token Contract >"
                                                                )
                                                            ),
                                                            l.a.createElement(
                                                                "div",
                                                                { className: "headerLinks" },
                                                                l.a.createElement(
                                                                "a",
                                                                {  href:"https://etherscan.io/address/0x787Bbc3D2D5A60195D02d9450d76a66c5457D92D", target:'_blank' },
                                                                    "Smart Contract >"
                                                                )
                                                            )
                                                        ),
                            l.a.createElement("div", {
                                className: "table-responsive"
                            }, l.a.createElement("table", {
                                className: "table table-borderless"
                            }, l.a.createElement("tbody", { className: "tbody" }, l.a.createElement("tr", null, l.a.createElement("th", { }, "My Balance"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", { style: { fontFamily: "Montserrat"} }, a), " ", l.a.createElement("small", {  }, "B26"))), l.a.createElement("tr", null, l.a.createElement("th", {  }, "Staked"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", { style: { fontFamily: "Montserrat" } }, i), " ", l.a.createElement("small", { }, "B26"))), l.a.createElement("tr", null, l.a.createElement("th", { }, "Total Earned"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", { style: { fontFamily: "Montserrat"} }, r), " ", l.a.createElement("small", { }, "B26"))), l.a.createElement("tr", null, l.a.createElement("th", { }, "Pending"), l.a.createElement("td", {
                                className: "text-right"
                            }, l.a.createElement("strong", { style: { fontFamily: "Montserrat"} }, n), " ", l.a.createElement("small", { }, "B26"))), l.a.createElement("tr", null, l.a.createElement("td", {
                                style: {
                                    fontSize: "1rem"
                                },
                                colSpan: "2",
                                className: "text-center"
                            },""))))),
                            l.a.createElement("div",
                                { className:"viewTran"},
                                    l.a.createElement("a", {
                                    style: {  fontSize: "12px", fontWeight: "700", SpaceCharacter: "-50%", },
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    href: "".concat(window.config.etherscan_baseURL, "/address/").concat(window.config.yfdai_staking_address,)
                                }, "View Transaction History on Etherscan"), " \xa0 ", l.a.createElement("i", {
                                    style: {
                                        fontSize: ".8rem"
                                    },
                                    className: "fas fa-external-link-alt"
                            })),
                            l.a.createElement("div", {
                                className: "row yfdai-staking-form"
                            }, l.a.createElement("div", {
                                className: "col-md-6"
                            }, l.a.createElement("div", { className: "card" }, l.a.createElement("form", {
                                onSubmit: this.handleDeposit
                            }, l.a.createElement("div", {
                                className: "form-group"
                            }, l.a.createElement("label", {
                                htmlFor: "deposit-amount",
                                className: "d-block text-center",
                                style: {  spaceCharacter: "300%" }
                            }, "STAKE"), l.a.createElement("div", {
                                className: "input-group"
                            }, l.a.createElement("input", {
                                value: this.state.depositAmount,
                                onChange: function (t) {
                                    return e.setState({
                                        depositAmount: t.target.value
                                    })
                                },
                                className: "form-control",
                                placeholder: "0",
                                type: "text"
                            }), l.a.createElement("div", {
                                className: "input-group-append"
                            }, l.a.createElement("button", {
                                className: "btn btn-primary hoverable bg-white",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: this.handleSetMaxDeposit
                            }, l.a.createElement("a", {
                                className: "text-transparent main-gradient-bg text-bold",
                                href: "#"
                            }, "MAX"))))), l.a.createElement("button", {
                                className: "btn btn-block btn-primary hoverable bg-white",
                                type: "submit"
                            }, l.a.createElement("a", {
                                onClick: this.handleDeposit,
                                className: "text-transparent text-bold",
                                href: "#"
                            }, "STAKE")), l.a.createElement("p", {
                                className: "mt-1 text-center",
                                style: { fontFamily: "Montserrat", SpaceCharacter: "-50%" }
                            }, "1% fee for staking.")))),


                            l.a.createElement("div", {
                                className: "col-md-6"
                            },l.a.createElement("div", { className: "card" }, l.a.createElement("form", {
                                onSubmit: this.handleWithdraw
                            }, l.a.createElement("div", {
                                className: "form-group"
                            }, l.a.createElement("label", {
                                htmlFor: "deposit-amount",
                                className: "d-block text-center",
                                style: {  spaceCharacter: "300%"  }
                            }, "UNSTAKE"), l.a.createElement("div", {
                                className: "input-group"
                            }, l.a.createElement("input", {
                                value: this.state.withdrawAmount,
                                onChange: function (t) {
                                    return e.setState({
                                        withdrawAmount: t.target.value
                                    })
                                },
                                className: "form-control",
                                placeholder: "0",
                                type: "text"
                            }), l.a.createElement("div", {
                                className: "input-group-append"
                            }, l.a.createElement("button", {
                                className: "btn btn-primary hoverable bg-white",
                                style: {
                                    cursor: "pointer"
                                },
                                onClick: this.handleSetMaxWithdraw
                            }, l.a.createElement("a", {
                                className: "text-transparent main-gradient-bg text-bold",
                                href: "#"
                            }, "MAX"))))), l.a.createElement("button", {
                                title: m ? "" : "You recently staked, please wait before unstaking.",
                                disabled: !m,
                                className: "btn btn-primary btn-block hoverable bg-white",
                                type: "submit"
                            }, l.a.createElement("a", {
                                onClick: function (t) {
                                    return m && e.handleWithdraw(t)
                                },
                                className: "text-transparent text-bold",
                                href: "#"
                            }, "UNSTAKE")), l.a.createElement("p", {
                                className: "mt-1 text-center",
                                style: { fontFamily: "Montserrat", SpaceCharacter: "-50%" }
                            }, "0.5% fee for unstaking.")
                            ))),

                            // l.a.createElement("div", {
                            //     className: "col-md-6"
                            // }, l.a.createElement("div", { className: "card" },l.a.createElement("form", {
                            //     onSubmit: this.handleClaimDivs
                            // }, l.a.createElement("div", {
                            //     className: "form-group"
                            // }, l.a.createElement("label", {
                            //     htmlFor: "deposit-amount",
                            //     className: "text-center d-block",
                            //     style: { fontFamily: "Montserrat", fontSize: "15px", spaceCharacter: "300%", color: "#FFFFFF" }
                            // }, "PENDING"), l.a.createElement("p", {
                            //     className: "form-control text-right",
                            //     style: {
                            //         border: "none",
                            //         textAlign: "right",
                            //         color: "#fff",
                            //         background: "transparent"
                            //     }
                            // }, l.a.createElement("strong", {
                            //     style: {
                            //         fontSize: "1.2rem"
                            //     }
                            // }, n), " ", l.a.createElement("small", null, "CCM"))), l.a.createElement("button", {
                            //     className: "btn btn-primary btn-block hoverable bg-white",
                            //     type: "submit"
                            // }, l.a.createElement("a", {
                            //     onClick: this.handleClaimDivs,
                            //     className: "text-transparent main-gradient-bg text-bold",
                            //     href: "#"
                            // }, "CLAIM")),
                            //  l.a.createElement("p", {
                            //      className: "mt-1 text-center",
                            //      style: { fontFamily: "Montserrat", fontSize: "15px", fontWeight: "700", SpaceCharacter: "-50%", color: "#5A606C" }
                            //  }, "0% fee for claim.")
                            // )))
                            
                            ),
                                                    l.a.createElement(
                                                        "div",
                                                        { className: "box-2 pad-top mb-5" },
                                                            l.a.createElement(
                                                                "div",
                                                                { className: "form-row clmEarning" },
                                                                l.a.createElement(
                                                                    "div",
                                                                    { className: "col text-left" },
                                                                    l.a.createElement("strong", { className: "orange-text" }, l.a.createElement("button", {
                                className: "btn btn-primary hoverable bg-white btn-claim",
                                type: "submit"
                            }, l.a.createElement("a", {
                                onClick: this.handleClaimDivs,
                                className: "text-bold orange-text",
                                href: "#"
                            }, "Claim my earnings"))
                            )//"Claim my earnings")
                                                                ),
                                                                l.a.createElement(
                                                                    "div",
                                                                    { className: "col text-right" },
                                                                    l.a.createElement("strong", { className: "totalEarned" }, "TOTAL EARNED")
                                                                )
                                                            ),
                                                            l.a.createElement(
                                                                "div",
                                                                { className: "form-row" },
                                                                l.a.createElement(
                                                                    "div",
                                                                    { className: "col text-left" },
                                                                    l.a.createElement("span", { className: "text-grey" }, "no fee for claiming")
                                                                ),
                                                                l.a.createElement(
                                                                    "div",
                                                                    { className: "col text-right" },
                                                                    l.a.createElement("strong", { className: "" }, n),
                                                                    l.a.createElement("strong", { className: "" }, " B26")
                                                                )
                                                            )
                                                    ),
                          
                        //   l.a.createElement("h4", {
                        //       style: {
                        //           //maxWidth: "300px",
                        //           margin: "30px",
                                 

                        //       }
                        //   }, "The Moshiach Staking APR"),
                            //     l.a.createElement("div", {
                            //     className: "row"
                            //     ,style: {
                            //         //maxWidth: "300px",
                            //         margin: "1px",
                            //         backgroundColor: "#0A0C0F"
                            //     }
                            //     },
                            //     //l.a.createElement("div", {
                            //     //    className: "card", style: {
                            //     //    padding: "10px"
                            //     //}},
                               
                               
                            //     l.a.createElement("div", { className: "col-sm-6 col-lg-4" },
                            //     l.a.createElement("div", {className: "c-callout c-callout-success"},
                            //   l.a.createElement("span", { className: "text-muted" }, "Yearly APR: "), l.a.createElement("strong", null, "40%")
                            //     )),
                            //      l.a.createElement("div", { className: "col-sm-6 col-lg-4" },
                            //     l.a.createElement("div", {className: "c-callout c-callout-success"},
                            //   l.a.createElement("span", { className: "text-muted" }, "Per Week: "), l.a.createElement("strong", null, "0.76%")
                            //     )),
                            //      l.a.createElement("div", { className: "col-sm-6 col-lg-4" },
                            //     l.a.createElement("div", { className: "c-callout c-callout-success" },
                            //   l.a.createElement("span", { className: "text-muted" }, "Per Day: "), l.a.createElement("strong", null, "0.10%")
                            //     ))
                            // //l.a.createElement("li", null, "Per Month: ", l.a.createElement("strong", null, "6%")),
                            // //l.a.createElement("li", null, "Per Day: ", l.a.createElement("strong", null, "0.2%"))
                            // )
                            
                            
                            )
                            
                        }
                    }]), a
                }(l.a.Component),
                x = (window.BigNumber, function (e) {
                    Object(p.a)(a, e);
                    var t = Object(h.a)(a);

                    function a(e) {
                        var n;
                        return Object(d.a)(this, a), (n = t.call(this, e)).handleConnection = Object(m.a)(o.a.mark((function e() {
                            var t;
                            return o.a.wrap((function (e) {
                                for (; ;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, window.connectWallet();
                                    case 3:
                                        return t = e.sent, e.t0 = n, e.t1 = t, e.next = 8, window.web3.eth.getCoinbase();
                                    case 8:
                                        e.t2 = e.sent, e.t3 = {
                                            is_wallet_connected: e.t1,
                                            coinbase: e.t2
                                        }, e.t0.setState.call(e.t0, e.t3), e.next = 16;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t4 = e.catch(0), window.alertify.error(String(e.t4));
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 13]
                            ])
                        }))), n.state = {
                            is_unlocked: !1
                        }, n
                    }
                    return Object(u.a)(a, [{
                        key: "componentDidMount",
                        value: function () { }
                    }, {
                        key: "render",
                        value: function () {
                            return this.state.is_wallet_connected ? l.a.createElement("div", {
                                className: "App"
                            }, l.a.createElement("div", {
                                className: "container",
                                style: {
                                    maxWidth: "577px"
                                }
                            }, l.a.createElement("div", {
                                className: "planHeading"
                            },"B26 — Boost your staking  "),
                            l.a.createElement(b.a, {
                                exact: !0,
                                to: "/",
                                render: function (e) {
                                    return l.a.createElement(k, e)
                                }
                            }))) : l.a.createElement("div", {
                                className: "App text-center"
                            }, l.a.createElement("div", {
                                className: "container",
                                style: {
                                    maxWidth: "577px"
                                }
                            }, l.a.createElement("div", {
                                className: "planHeading"
                            },"Plan 2 — Get your Lambo (Earn up to 8% per week)"),
                            l.a.createElement("div", {
                                className: "mid-Logo"
                            }, l.a.createElement("img", {
                                alt: "B26 Staking DAPP",
                                src: "./images/B26logo.png"
                            }), " "),
                            l.a.createElement("button", {
                                onClick: this.handleConnection,
                                className: "btn btn-primary hoverable btnConnectWallet"
                            }, l.a.createElement("a", {
                                className: "main-gradient-bg text-transparent text-bold"
                            }, "CONNECT WALLET"))
                            ,l.a.createElement("div", {
                                className: "choosePlan"
                            }, "Choose your Staking Plan"),
                            l.a.createElement(
                                  "div",
                                  { className: "imageList" },
                                  l.a.createElement("a", { href: "https://stake1.b26.finance", target:'_blank'},
                                  l.a.createElement("img", { className: "img1", src:  "./images/icon-fireyourboss2.png" })),
                                  l.a.createElement("a", {},
                                  l.a.createElement("img", { className: "img2", src: "./images/icon-getyourlambo2.png" })),
                                  l.a.createElement("a", { href:"https://stake3.b26.finance", target:'_blank'},
                                  l.a.createElement("img", { className: "img3", src: "./images/icon-financialfreedom.png" }))
                                )
                            ))
                        }
                    }]), a
                }(l.a.Component));
            Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
            i.a.render(l.a.createElement(l.a.StrictMode, null, l.a.createElement(s.a, null, l.a.createElement(x, null))), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then((function (e) {
                e.unregister()
            })).catch((function (e) {
                console.error(e.message)
            }))
        }
    },
    [
        [23, 1, 2]
    ]
]);
//# sourceMappingURL=main.a0f0cde4.chunk.js.map
