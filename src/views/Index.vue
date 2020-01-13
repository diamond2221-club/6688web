<template>
    <div id="index">
        <div id="wrapper1">
            <div
                id="wrapper2"
                style="opacity: 1; transform: translate(0px, 0px);"
            >
                <div
                    id="title"
                    :style="{backgroundImage: `url(${require('@/assets/images/1566887589583980.png')})`}"
                >
                </div>
                <div id="mouse">
                </div>
            </div>

            <div id="wrapper3">
                <div
                    id="wrapper4"
                    style="opacity: 1; transform: translate(0px, 0px);"
                >
                    <div id="sportDataHolder">
                        <a
                            :href="hrefArr1[0]"
                            id="lj1"
                            target="_blank"
                            class="sportData"
                        ><span class="signalBar">
                                <span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar"></span>

                            </span><span class="contentHolder"><span class="subContainer"><span
                                        class="flag"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAABUFJREFUaAXtm0uIFEcYx0ddjQoaySrk4BpcV0QF9aAbUPEBUaKgYAhGIiJ6WTxIQBJPuYgg+Agh4uMg4mEPCR5yiQEFdRAFQclDCBKJq+uqYCCSYIhGTZz8/mZq6Z2qnu6a7dfifPCje7q+qvr+9ernlEpNa7ZAswWGcgsMSzP4Sqk0nfKXw1yYAe0wHsaB7E94BLfgBlyDMkH9wnZoGCLnwgHog0qDKK/KUEMV0wiuE8rQqMiwfCqzszCqCaYDTqYgtLYBVEdHbsKpvAU07J5BbXBp/VZdqrMlU+FU2ArnIS1hUeWq7tZMRFPRbOjJUaxpDMUwO1XRVLACHhVArBGtWFakIpqC1bNFEhsUnWxPI1RzNtthvJ71YVHsNUKxJTOnKUircXYL1BFEfgIXYENsweptxTj41ZtCdBowwyf97Sbq6oPrcAVOwEKIF8OBQc1nKtFFRZbn2UplJuJuQg+cgnkQT6z8FGvdi5PhES2yh/SRET7JJm+luM/hItyBHyG+KVbF7G+0lK6NfVq3Utnq6R9V/qcNl+d/7Y3YsrfgMgFObThIv8at31hlry5GqG7x/ALowL8Xdnrm860nvr/z1jJsDm/yaiE5rwOVtlQ/CmFODWGC13uHvIgcf0E76DlH/ubUYAlmKCvcNu94JfRfeA3e887tnyF6LW6rahlQtiWYVD2D8rPtuI8Baig9Bf8SyORhE/BVHfvgEDgHL8cdkbguxZyTvbSB7B/BCFBPGnvBzliQ0GGgtMlwFf4BHTOm3r8DH4D8GzGJXAU646qcy9ANbrO0uATr6aJtX3HoPuji7U14AkaMRKt3g6ZGMONHfhJ7CcJ7g8QYthOfB7Ct6vt33TyWFhNSMJdmo9t09fM2/ACjQULVo7ViOfTyWHAkHOfYYMWqXNm30ANbQA963wG3WVpMH/W7E/tv/Ii+1dLQWgO1w7a/JHbUnI9hF3wDSdl8CroH6un69hCBE4MuLsGaXaOCTqH7H5PSBa75qJI17N+HXsjHnhGGJlO/uYZ0f2Lkzh8RHloheiN8Mk52CdasiGfLcDPzVD2qtpRIY3qp0mV+5LK1tLgE611PPJuJmwQbsZfY11siM4iUtgzyM0uLS7BCjrZ3cXkd1KNapT+DLbAazoJES7AaJT+ztLgE34gV30q8JOpX2AxHwZjOkXtB58g3YCPkY5YWl2C9sow2nY8vwBL4zuF+jGMfQi+o15O2HRTovD0YUJGlJbjEGM+y2QndziDlNOwO9fg/4TobNcj+CD+f5F04T4J58DtMA/Xj12CbpUXLjWVMyT4OtlkJRTmgNULRjYDvwd3TdxE3hdQB5hrScjg5wKtoP3T1pmuAF3A4NDinhjDB3aHF5J0wjgC0ZmgN0T3xAnCbnwaGtf9DPE5Q5CsC1tx1t0ngKIH7P6Ythlg1eGdASvxdMmbxKUPSI8I5d41q5yptEhHcwb5OLnq+MBTsOUHOQtTNsGDDFq2X/tWMB8MyZ3J8jlctB+uJjVUSvZzt61KtA2egC05DJ8RbG5J5XapWocJsX4ifQ+Rt+BnaYwmO/UK87pA2Q4Bh8pD9tWDdXxqfxLa6kHirWpOupL6ExRBuimltNcZwr0ZS6On0P2pZTY/qpfhP8AXMgfAhnd5HLaaBqDybz5a66wpVI2gYJ/sxixFZu6Wi9D9Ma6krWAtUa21cqf6mwlfn08NgSyJc34FkcUWW78elQdHaR/Sr8fmwQ3ihPxDn9JWe0et617wc9BZPD4baYTzorlamc6gepd4CPagZen8BIOimNVug2QLZtcB/n0xXzM0vflgAAAAASUVORK5CYII=&quot;);"
                                    ></span><span class="name">内地线路</span><span class="time">0.080秒</span><span class="text">立刻访问</span></span></span></a><a
                            :href="hrefArr1[1]"
                            id="lj2"
                            target="_blank"
                            class="sportData"
                        ><span class="signalBar"><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span></span><span class="contentHolder"><span class="subContainer"><span
                                        class="flag"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCMTYyMDQ5RkI3MUQxMUU4OTkxM0M5Q0JERDQzMDRCOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCMTYyMDRBMEI3MUQxMUU4OTkxM0M5Q0JERDQzMDRCOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkIxNjIwNDlEQjcxRDExRTg5OTEzQzlDQkRENDMwNEI5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkIxNjIwNDlFQjcxRDExRTg5OTEzQzlDQkRENDMwNEI5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+sA0zFQAAEF1JREFUeNrsW2l0VGWa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&quot;);"
                                    ></span><span class="name">香港线路</span><span class="time">0.050秒</span><span class="text">立刻访问</span></span></span></a><a
                            id="lj3"
                            :href="hrefArr1[2]"
                            target="_blank"
                            class="sportData"
                        ><span class="signalBar"><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span></span><span class="contentHolder"><span class="subContainer"><span
                                        class="flag"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDMDgwQUEyM0I3MUQxMUU4QTZGMUMzRkY4Rjg2Njg3MCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDMDgwQUEyNEI3MUQxMUU4QTZGMUMzRkY4Rjg2Njg3MCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkMwODBBQTIxQjcxRDExRThBNkYxQzNGRjhGODY2ODcwIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkMwODBBQTIyQjcxRDExRThBNkYxQzNGRjhGODY2ODcwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+0FZzWgAADNlJREFUeNrsW3mQFNUZ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&quot;);"
                                    ></span><span class="name">台湾线路</span><span class="time">0.022秒</span><span class="text">立刻访问</span></span></span></a><a
                            :href="hrefArr1[3]"
                            id="lj4"
                            target="_blank"
                            class="sportData"
                        ><span class="signalBar"><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span></span><span class="contentHolder"><span class="subContainer"><span
                                        class="flag"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDNkMyNzdGQUI3MUQxMUU4QTBDQUE5MTU4NTk0NjM4NSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDNkMyNzdGQkI3MUQxMUU4QTBDQUE5MTU4NTk0NjM4NSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkM2QzI3N0Y4QjcxRDExRThBMENBQTkxNTg1OTQ2Mzg1IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkM2QzI3N0Y5QjcxRDExRThBMENBQTkxNTg1OTQ2Mzg1Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+fII3tAAACg9JREFUeNrsWwtwVNUZ/u7dR3Y3z928gIABEoEYorxKKEHBoVRGoPIcB1Ssbad1bGXKpNapHaVUWqtY246lY3WKY4vFShEpBJRXEyJkEHmHghIeAQJJNpuEvDf7uP3O3ZsQIMlukk1IIv/Ol9x7cu7Z853zn///z39PJEVR8HUSGV8zuUO4v4v+5oJsKSWgByUVXihQtHuJV5L2V7XMQMQTY4l7iTTWmsVaYaJWI7/aaQjRqnv38+dW4gviBOEgXLd+Kb+FNsfgdUPv9QTUz2nKqfYJt0cQ0JFiI9yww4kqlaxMXgpLxW8z4nUSwqyAO4OVHyMeIiJatqO0aMniqm8qnqxBSCnxGbGZ2Knde7pthlsnKzTfjTpc4LUOlrvHIX7iBJhSkmEamgCd1SbVfH4ypeSf6592nzk7W0b4MEUdBrFmpOZ5D1DiiPkaBNlNxF+J48Egrve/yHX8lhp+ChE6KgMjVj2P+AVzVH3VxFp24tiqkq0FSxobaqJ0rC/DSH10qAovI5qEXdcVvePkf0Q8QWQRmcSlbiSsZ1dLUU8VvitzJVJff6nlA5I97/iMU8/+9O2qQ/9NFOUhGMKfRmpCASJGT1Ur1ebnsGQgyRo7R9knFmIRIRp9jlhHeINKWKiuGxVcq5VIWbMOSc8suW6PJBgv/WPb6qNL5y/TsUYYUtT1LEmNkGNj0FB6FqkrliFkgA37709nWTz0ZRUQQY7ScRW/ecbfIxYSS4nKoLglSR2+Bs5UEZLfeLuZrGqRJZiLt+RuO7p01rIQzqmFBthntDysfw2G+0Yi43+nkbBwJmKnTETGqQLYHhyPBqVUM1neYNieOZpFTwySH9ax8+cRO34ukpY/2WJipfD6sopPjjzy2HQjbXIIhqpD40E1Vb8eZiUejp3rYf/bJrVhMXDXduxF8YZ3WDea9Vz8VGpOrMuSROwjhnaZsIdqKsOE4X9eQeokq6gI5eXGMz9b/YBTuUQCwzkI1dSDcwiblIHwtLEkc0U1UIqbV9tzcfWD7fBW1cOtNLDNchgGJyB63nzWKCOcKmmla9QTiF3EwC4RduEqrKOmIm7SmCZ/b5AlvFXtqJhhf28DwjEAXtkNY0y0qsh3/TYTCb9ZxqtKRMZNQO2Jk8h/eAEOL16M8t25iImbBKe+CraZk5H8/mp6cjZotcBjMAbD0yRppM2dIiziJRdqEfFQRktX8n3i8Wu789jZQtaJgFexwzTuXkzIPYi4B9MRM+dbmJidB/PoNDj2bKDbMlBHYuHI/jdcFhkpH3yM5N/9AhZzGNKP7UXcU0vgkcpVwkHYr91DvNscH3WUMMefKprSsrE14qL6SL66DmUad50SieIda1G5K0819Sai5pP9uLrn7xzqJLYRqZK2UPVrLxzD1ZVvwRQd5XMLDQ24+OZrMDSKsMQYjPUs5FFibofdkqKaLDOMcWpEaGJnVjcNjLvEoQ2iCChCaK4MkI06FK3dCI/JCK9FrzWoV+t4RV01/nXDTBdVlH0AVTnZMI8dB11IGNeOriu+uTX5vRaW2jvgh30dkH2JgUW8fbhpCrwcCqWZshcm0z2o2PEZzudk8V6P8G88wJkeotlgjYgingmBu7QUZx95FiVVBzE4fS5Co1PQUHMmWLPbJMOIXxPPtDWScmtxs1v44NJKTgFeUKTrz5liovjXpv0RFdvpQkXOLjV8lKkVDQePQ7LFqYbMow6J+NTCbB2ByvwC1FSdQayUiroDuagvPMfvCu2OHeDC9vyzfOv8inXViJpDJ6fzdlRLjxk2YbQaJ/tCEKGqnGU5jld1jLWLMPjlTAxY/l0Uc5MhNoCy6oAKEf/4HCS9uVK14m4aO70UrQ6sgm5JL8UIA9uWAWs1tDQgQq7YvvdR700jYv32FD6QSA1wsI5N7a4gYJu1CEO+MwYJ9LEiJFVsEqrWZMHtrEfK8uVImDkHpoSBHKB3UJl9Co6P1kPvsXQXYWhx9x9EKB+QHzYifkhlYe6s4p37bozgoyIQ/+QChht2bcsoc63rUXuW7siaiNBYGyyxkQi3DkNVST5qS08j1G1DRFIijDRq+uQ0VBTkweDRq2teQrfJaF/CIaDAQ6FdNU7jNi+i4Ccv3RL5Jq9+jq4mgUN3SSWtlyJRcfowyv71EersFaixV6Ls4yw0OC7AWX0FpR9uQnVlFWou21G95VPUHsljK5HBCS7bd7fzWuPX2gzTWHnmWuhLy7/ag/zMl2+cZc5i2vYPuTpraNouU72BUPMImJKH4YvUmTiUNgO6GCvM+kTOYTwsqck4nr4Q+0Y+AEn2INKcwmecPZG+mqnuWG82yjfnpXOklFSWfMqxSPByQ9DATUTiileR+quft9hEAEXvbsWh781TMyHR8ji4vA7WrlYTA8INGQ2xkDyMrL3ltNi16n5KJ8KMEIa9zkb0UDZ85DTl1Ff+ZvhuX1wqumjhZxAKVj6Pg0/8GHUVVc2KmPDUbKTn5iH6vimwew/TAl9Ud0Q6aZCI0+BxOeH2OknSxPI4NhjHGbfC43SiB2VEICotguiopn2Tws5H0DKXrvsLPh9xP75c9QbKrxSrMxQ/ZQIyjubim0cPYXDmC5CiLBymGp8x08watGDFF3f5ynvwXcd4v26JMzhV0QZCao6uLVzYqfCUFeHLFzNx+ZW1iJw8FiGjhsOSPBSmCMbIUihkA32r4kEvkjF+CTfiWmhb/lFRNwMD4ak7jyu7TsKz68aGjNQFiUMjdTzz0l0y0C9hY8QAt+LHYyjcD4f4LJ6qAR7ZlyCXbkzE9wax+iU8KX+LjPAwP4TR/LZBvVNuydj3Fmn0v4atNr0hzIx+IuV+rbRTZ7iA/iPn/e+WJPk/IifRTwjv9++HfW/yrvYTwvmBBB6XibJ+QFYYrHOBEBZOdGM/ICyiBEcghEWolA0E553IbRRhi1wBJQAoR4mDfZis0NKsABMAPu9ErO/DhHOIko4QFrIZ6D1BcQdlbWvq7I9wIXyvL/qaiKW4u73cT3shs3jFUtXHCL+OVrKVgRAWcpZY3ofIbvbnUm/JaVXXuxFuvmFPIdJUuUR6HyA8oC1j1eYMG/W3FInFv7gPRF9z/ZFtlXCIQW5r17GkFwcjL2qBBjpMuB0Rp+IW9kKyrxGvIMA0S0cPl4pTcfN70Uz/kfglOnBuojOnaQXp2URNL1BjcUjN3aGn1MNincNIIkvpeSkgphNSZ/rdFcICJuIHPUj2T4StK32WgvQ/D+L1zA+Jp6G+jAu6bNDW6wF08ZyTFMR/8hAJWnHGQryMFm/gR3exvUuavXifONLWZuB2Em4p4vTrOPhOvwpXFg1fUjysnXSMyE5UE9s0Fyg2AfZgd6xThMUTjW4vGl1+vZM4l2QjBhOjtEEQ6j8Ivpx4ibYrEwkHcQD8olbW5mxKki8abCUivK0z3Gvlzr/x3CHcz+T/AgwAV/PaZIXX1eYAAAAASUVORK5CYII=&quot;);"
                                    ></span><span class="name">新加坡线路</span><span class="time">0.049秒</span><span class="text">立刻访问</span></span></span></a><a
                            id="lj5"
                            :href="hrefArr1[4]"
                            target="_blank"
                            class="sportData"
                        ><span class="signalBar"><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span><span class="bar active"></span></span><span class="contentHolder"><span class="subContainer"><span
                                        class="flag"
                                        style="background-image: url(&quot;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDRDJCRTk3QkI3MUQxMUU4QjU2RUQyRThGMTkzNTExOSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDRDJCRTk3Q0I3MUQxMUU4QjU2RUQyRThGMTkzNTExOSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkNEMkJFOTc5QjcxRDExRThCNTZFRDJFOEYxOTM1MTE5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkNEMkJFOTdBQjcxRDExRThCNTZFRDJFOEYxOTM1MTE5Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+CDI1xwAAC0hJREFUeNrsWwtwVNUZ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&quot;);"
                                    ></span><span class="name">菲律宾线路</span><span class="time">0.027秒</span><span class="text">立刻访问</span></span></span></a>
                    </div>
                    <div id="agent-box">
                        <a
                            :href="item.url"
                            :id="`jj${index + 1}`"
                            target="_blank"
                            class="agentData"
                            v-for="(item, index) in hrefArr2"
                            :key="index"
                        >
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAVCAYAAABYHP4bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RUU4NDIxRUI1NkYxMUU4ODg1Q0Q4QkE1NDhDRjBGMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RUU4NDIxRkI1NkYxMUU4ODg1Q0Q4QkE1NDhDRjBGMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhFRTg0MjFDQjU2RjExRTg4ODVDRDhCQTU0OENGMEYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhFRTg0MjFEQjU2RjExRTg4ODVDRDhCQTU0OENGMEYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KY0oQAAAAXxJREFUeNq0lE8rRFEYxs+YjSxIiJLChgWysJsPMCz82cxK1j6BjXJLSTIiZK9Q/jQ1n4C1JSFGjYitUqQRHc+pd+rpdu6ce+fOvPVrZp57zvubtzlzElprFVAjIAc6wJ+qXEl53QVL1hVGZKEPvOvqasHW0ybpAm86Xs27RI3gXtemMkGiJLjUta20TXSu61Mp0z8hpy4PplV9qgRSZpIzsv+CA/AScwrT846DBtiKPvscGAOfVU7ggQy4oKxQ/n0WSX4sWS/4iDiJJ3tnwLdkV6CFD4NHG3KSDdIGV62QpFzXoMn2P1qmRSeSDYAvh2TVIrkFrZVuBpadSjYESgGSNVkzSdkNaHZdQUq+oX+yYfDjk2zIsynKCqA9zF1nkx1KNkpZVrI0ZQ+gLeylymSpyZFk42Bb3k/Q8yfQGdTLJTKsU7N9ynmSotz6Ko7IsElN98AsfX52SaKIDFuWE2euqp4w+6OIDDskeQXdYfdGFSk5gY+gP8q+fwEGAPgGbe4Owv7yAAAAAElFTkSuQmCC"
                                alt=""
                                style="vertical-align: middle;"
                            >
                            <span>{{item.name}}</span>
                        </a>
                    </div>
                </div>
                <div
                    id="wrapper5"
                    style="opacity: 1; transform: translate(0px, 0px); width:101%; "
                >
                    <div id="websiteDataHolder">
                        <div class="websiteData">
                            <p class="title">
                                金融 financial
                            </p>
                            <div class="websiteList">

                                <a
                                    href="http://www.boc.cn/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233617300592.png')})`}"
                                    ></span><span>中国银行</span></a>

                                <a
                                    href="http://www.icbc.com.cn/icbc/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233639546573.png')})`}"
                                    ></span><span>工商银行</span></a>

                                <a
                                    href="http://www.ccb.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233659954169.png')})`}"
                                    ></span><span>建设银行</span></a>

                                <a
                                    href="http://www.abchina.com/cn/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233670589219.png')})`}"
                                    ></span><span>农业银行</span></a>

                                <a
                                    href="http://www.psbc.com/cn/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233680906487.png')})`}"
                                    ></span><span>邮政储蓄</span></a>

                                <a
                                    href="http://cn.unionpay.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233692240919.png')})`}"
                                    ></span><span>银联</span></a>

                                <a
                                    href="https://www.alipay.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233703394296.png')})`}"
                                    ></span><span>支付宝</span></a>

                                <a
                                    href="https://www.tenpay.com/v3/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233763416205.png')})`}"
                                    ></span><span>QQ钱包</span></a>

                                <a
                                    href="https://pay.weixin.qq.com"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565233755628903.png')})`}"
                                    ></span><span>微信支付</span></a>

                            </div>
                        </div>
                        <div class="websiteData">
                            <p class="title">
                                搜索 search
                            </p>
                            <div class="websiteList">

                                <a
                                    href="https://www.baidu.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234399614500.png')})`}"
                                    ></span><span>百度</span></a>

                                <a
                                    href="http://www.google.cn/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234416329155.png')})`}"
                                    ></span><span>谷歌</span></a>

                                <a
                                    href="https://www.sogou.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234443831543.png')})`}"
                                    ></span><span>搜狗</span></a>

                                <a
                                    href="https://www.sina.com.cn/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234464939334.png')})`}"
                                    ></span><span>新浪</span></a>

                                <a
                                    href="https://ph.yahoo.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234488464296.png')})`}"
                                    ></span><span>YaHoo</span></a>

                                <a
                                    href="http://www.sowang.com/163search.htm"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234502145102.png')})`}"
                                    ></span><span>网易</span></a>

                                <a
                                    href="https://www.360.cn/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234531595302.png')})`}"
                                    ></span><span>360</span></a>

                                <a
                                    href="http://www.soso.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234549109750.png')})`}"
                                    ></span><span>QQ搜索</span></a>

                                <a
                                    href="http://www.fang.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565234575996316.png')})`}"
                                    ></span><span>搜房网</span></a>

                            </div>
                        </div>
                        <div class="websiteData">
                            <p class="title">
                                新闻 news
                            </p>
                            <div class="websiteList">

                                <a
                                    href="https://news.163.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235109426348.png')})`}"
                                    ></span><span>网易新闻</span></a>

                                <a
                                    href="http://news.baidu.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235128711523.png')})`}"
                                    ></span><span>百度新闻</span></a>

                                <a
                                    href="http://www.people.com.cn/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235148473532.png')})`}"
                                    ></span><span>人民网</span></a>

                                <a
                                    href="http://news.qq.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235168771284.png')})`}"
                                    ></span><span>腾讯新闻</span></a>

                                <a
                                    href="http://news.cctv.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235191409189.png')})`}"
                                    ></span><span>CCTV新闻</span></a>

                                <a
                                    href="http://www.uc123.com/xinwen.html"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235214371268.png')})`}"
                                    ></span><span>UC新闻</span></a>

                                <a
                                    href="https://www.toutiao.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235246165145.png')})`}"
                                    ></span><span>今日头条</span></a>

                                <a
                                    href="http://news.ifeng.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235255403246.png')})`}"
                                    ></span><span>凤凰资讯</span></a>

                                <a
                                    href="http://www.huanqiu.com/"
                                    target="_blank"
                                    class="website"
                                ><span
                                        class="icon"
                                        :style="{backgroundImage: `url(${require('@/assets/images/1565235283978074.png')})`}"
                                    ></span><span>环球时报</span></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { fetchIndexData } from "@/api/index.js";
export default {
    name: "index",
    data() {
        return {
            hrefArr1: [],
            hrefArr2: []
        };
    },
    created() {
        this.hrefArr1 = "https://188hg0.com/|https://188hg1.com|https://188hg2.com|https://188hg3.com|https://188hg4.com".split(
            "|"
        );
        // this.hrefArr2 = "https://188hg0.com/commonPage/signUp-agent.html|https://188hg1.com/acenter/passport/login.html|https://188hg2.com/commonPage/signUp-agent.html|https://188hg3.com/acenter/passport/login.html|https://188hg4.com/commonPage/signUp-agent.html|https://188hg5.com/acenter/passport/login.html|".split(
        //     "|"
        // );

        fetchIndexData().then(res => {
            const { indexLine = [], indexAgent = [] } = res;
            this.hrefArr2 = indexAgent;
            console.log(indexLine, indexAgent);
        });
    }
};
</script>

<style lang='scss' scoped>
#index {
    background-color: rgb(25, 26, 30);
    background-image: url("../assets/images/1577654005133740.png");
    background-position: 50% 80.2%;
    background-repeat: no-repeat;
    background-position: top;
}
#index.mainContent {
    background-image: url(/static/img/index-background.25eb496.jpg);
    background-size: auto 110%;
    background-position: 50% 20%;
    transition: background-position 0.3s linear;
}
@media screen and (max-width: 880px) {
    #index.mainContent {
        background-image: url(/static/img/index-mobile-background.16d3146.jpg);
        background-size: contain;
        background-position: top !important;
        transition: none;
    }
}
#index #wrapper1 {
    max-width: 1180px;
    margin: 0 auto;
    padding: 10px;
}
@media screen and (max-width: 880px) {
    #index #wrapper1 {
        margin: 0 0 1.3rem;
    }
}
#index #wrapper1 #wrapper2 {
    width: 100%;
    height: auto;
    margin: 18% 0 0;
    opacity: 0;
    transform: translateY(50%);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
#index #wrapper1 #wrapper2 #title {
    width: 100%;
    height: 133px;
    margin: 0 0 5%;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0;
}
@media screen and (max-width: 1280px) {
    #index #wrapper1 #wrapper2 #title {
        background-position: 50%;
    }
}
@media screen and (max-width: 880px) {
    #index #wrapper1 #wrapper2 #title {
        margin: 5% 0;
    }
}
#index #wrapper1 #wrapper2 #mouse {
    width: 19px;
    height: 29px;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAdCAYAAABIWle8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDozQUJFMkZBQUIzNDgxMUU4OENBMUE4NjFFRjRDM0M5RSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDozQUJFMkZBQkIzNDgxMUU4OENBMUE4NjFFRjRDM0M5RSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjNBQkUyRkE4QjM0ODExRTg4Q0ExQTg2MUVGNEMzQzlFIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjNBQkUyRkE5QjM0ODExRTg4Q0ExQTg2MUVGNEMzQzlFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+74MlaAAAAbpJREFUeNq0lb1Lw0AYxq+xfhWhqIgIHURwEBFxchHF0YI6KKiDjg6C/4Kg0EFQl+7+A9ZBHDqog+LmplSXVhCEWvCjIioW2/N57RtNQnKNSX3gRy537z25r9wrpJTCgQVwAF7BHXgEGRAHPXZ97ExmwZMsKw/2uZwFp/JXCRBWmW1yYBqMGupLYJ3LzWCN4z5Al51ZnANilg8EuH7bUt8N3kERtBnNotxhw2bamoOZPkrStdGsAHIOG1GjMCOmuX1S8NqQRjyaEffgQRNCLIqyjoV3bYEWMpsCly461CrajkBR46CMIrDEzzpFzDPIB/lFKgKpLQquFDFv4DPoYgqkZIV2GnWADmQWhSaQpgrmL6JlCIF2MqMhpsBqhemqFAExwWdoV3GG3EA/fE5j50bhTx20PJqoov7FrOTThzZOVmtkUh9ZAXT6NGsAYTLbA70+zYZAPZ2RMT5r/T7OGd20Py+klEejQe6/bMyRpCUPZpShXqzZKcGG8y5NQuCC+/TZ5c0dw78aURjNGJLxsF4f+HY0a4VvENIZOAG3vP0DYILL52DOdOU7fLmVM/iNNItS4iEYt+v3JcAATWuNePHBpLoAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-size: contain;
    margin: 0 auto;
}
@media screen and (max-width: 880px) {
    #index #wrapper1 #wrapper2 #mouse {
        display: none;
    }
}
#index #wrapper1 #wrapper3 {
    margin: 10px 0;
}
#index #wrapper1 #wrapper3 #wrapper4 {
    width: 100%;
    height: auto;
    opacity: 0;
    transform: translateY(50%);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder {
    width: 100%;
    text-align: center;
    margin: 3px auto;
    display: -ms-flexbox;
    display: flex;
    flex-flow: row wrap;
    flex-grow: 1;
    justify-content: center;
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder * {
    display: block;
}
@media screen and (max-width: 1280px) {
    #index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder {
        max-width: 780px;
    }
}
@media screen and (max-width: 768px) {
    #index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder {
        max-width: 580px;
    }
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder .sportData {
    width: 230px;
    -ms-flex-positive: 1;
    flex-grow: 1;
    background-color: hsla(0, 0%, 93%, 0.3);
    padding: 10px;
    border-radius: 10px;
    margin: 3px;
    box-sizing: border-box;
    text-decoration: none;
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder .sportData:hover {
    background-color: #ff9200;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData:hover
    .subContainer {
    transform: translateY(-60px) !important;
}
@media screen and (max-width: 568px) {
    #index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder .sportData {
        width: 47%;
        height: auto;
        margin: 3px;
    }
}
#index #wrapper1 #wrapper3 #wrapper4 #sportDataHolder .sportData .signalBar {
    text-align: right;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar {
    background-color: #222;
    width: 3px;
    margin: 0 0.5px;
    display: inline-block;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:first-child {
    height: 5px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:nth-child(2) {
    height: 7.5px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:nth-child(3) {
    height: 10px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:nth-child(4) {
    height: 12.5px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar:nth-child(5) {
    height: 15px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .signalBar
    .bar.active {
    background-color: #fff;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder {
    width: 100%;
    height: 100%;
    max-height: 6.188em;
    margin: -20px 0 0;
    overflow: hidden;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer {
    line-height: 1.2;
    transform: translate(0);
    transition: transform 0.5s ease-in-out;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer
    .flag {
    width: 50px;
    height: 50px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: 120%;
    background-position: 50%;
    border-radius: 100%;
    border: 5px solid rgba(0, 0, 0, 0.5);
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer
    .name {
    color: #fff;
    font-size: 18px;
    word-wrap: break-word;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer
    .time {
    color: #fff;
    font-size: 14px;
}
#index
    #wrapper1
    #wrapper3
    #wrapper4
    #sportDataHolder
    .sportData
    .contentHolder
    .subContainer
    .text {
    margin: 22px 0 0;
    font-size: 22px;
    color: #fff;
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder {
    width: 100%;
    margin: 3px auto;
    text-align: center;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-align: center;
    align-items: center;
}
@media screen and (max-width: 1280px) {
    #index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder {
        max-width: 780px;
    }
}
@media screen and (max-width: 768px) {
    #index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder {
        max-width: 580px;
    }
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData {
    -ms-flex-positive: 1;
    flex-grow: 1;
    margin: 0 1px 0 0;
    padding: 13px 49.4px;
    background-color: hsla(0, 0%, 93%, 0.3);
    color: #fff;
    text-align: center;
    text-decoration: none;
    font-size: 18px;
    box-sizing: border-box;
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData:first-child {
    margin: 0 1px 0 3px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData:last-child {
    margin: 0 3px 0 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData:hover {
    background-color: #ff9200;
}
@media screen and (min-width: 769px) and (max-width: 1280px) {
    #index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData {
        margin: 0 1px 6px 0;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:first-child {
        margin: 0 1px 6px 3px;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:last-child {
        margin: 0 3px 6px 0;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:nth-child(3) {
        margin: 0 3px 6px 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:nth-child(4) {
        margin: 0 1px 6px 3px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}
@media screen and (min-width: 569px) and (max-width: 768px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:nth-child(2n) {
        margin: 0 3px 6px 0;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    #index
        #wrapper1
        #wrapper3
        #wrapper4
        #agentDataHolder
        .agentData:nth-child(odd) {
        margin: 0 1px 6px 3px;
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }
}
@media screen and (max-width: 568px) {
    #index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData {
        width: 100%;
        margin: 0 0 6px !important;
        border-radius: 10px;
    }
}
#index #wrapper1 #wrapper3 #wrapper4 #agentDataHolder .agentData .icon {
    width: 26px;
    height: 21px;
    margin: 0 0 -4px;
    display: inline-block;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAVCAYAAABYHP4bAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4RUU4NDIxRUI1NkYxMUU4ODg1Q0Q4QkE1NDhDRjBGMyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo4RUU4NDIxRkI1NkYxMUU4ODg1Q0Q4QkE1NDhDRjBGMyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjhFRTg0MjFDQjU2RjExRTg4ODVDRDhCQTU0OENGMEYzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjhFRTg0MjFEQjU2RjExRTg4ODVDRDhCQTU0OENGMEYzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+KY0oQAAAAXxJREFUeNq0lE8rRFEYxs+YjSxIiJLChgWysJsPMCz82cxK1j6BjXJLSTIiZK9Q/jQ1n4C1JSFGjYitUqQRHc+pd+rpdu6ce+fOvPVrZp57zvubtzlzElprFVAjIAc6wJ+qXEl53QVL1hVGZKEPvOvqasHW0ybpAm86Xs27RI3gXtemMkGiJLjUta20TXSu61Mp0z8hpy4PplV9qgRSZpIzsv+CA/AScwrT846DBtiKPvscGAOfVU7ggQy4oKxQ/n0WSX4sWS/4iDiJJ3tnwLdkV6CFD4NHG3KSDdIGV62QpFzXoMn2P1qmRSeSDYAvh2TVIrkFrZVuBpadSjYESgGSNVkzSdkNaHZdQUq+oX+yYfDjk2zIsynKCqA9zF1nkx1KNkpZVrI0ZQ+gLeylymSpyZFk42Bb3k/Q8yfQGdTLJTKsU7N9ynmSotz6Ko7IsElN98AsfX52SaKIDFuWE2euqp4w+6OIDDskeQXdYfdGFSk5gY+gP8q+fwEGAPgGbe4Owv7yAAAAAElFTkSuQmCC);
    background-repeat: no-repeat;
    background-size: initial;
}
#index #wrapper1 #wrapper3 #wrapper5 {
    width: 100%;
    height: auto;
    opacity: 0;
    transform: translateY(50%);
    transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}
#index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder {
    width: 100%;
    margin: 20px auto;
    margin: 6px auto 20px;
    text-align: center;
}
@media screen and (max-width: 1280px) {
    #index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder {
        max-width: 810px;
    }
}
@media screen and (max-width: 880px) {
    #index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder {
        max-width: 710px;
    }
}
#index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder .websiteData {
    width: 370px;
    padding: 0 32px 0 0;
    margin: 10px 0;
    display: inline-block;
    color: #fff;
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData:last-child {
    padding: 0;
}
@media screen and (max-width: 1280px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData:nth-child(2) {
        padding: 0;
    }
}
@media screen and (max-width: 880px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData:first-child {
        padding: 0;
    }
}
@media screen and (max-width: 468px) {
    #index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder .websiteData {
        width: 100%;
    }
}
#index #wrapper1 #wrapper3 #wrapper5 #websiteDataHolder .websiteData .title {
    margin: 5px;
    text-align: left;
    text-transform: uppercase;
    font-size: 18px;
    color: #ccc;
}
@media screen and (max-width: 468px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData
        .title {
        text-align: center;
    }
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData
    .websiteList {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    -ms-flex-positive: 1;
    flex-grow: 1;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
@media screen and (max-width: 468px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData
        .websiteList {
        -ms-flex-pack: center;
        justify-content: center;
    }
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData
    .websiteList
    .website {
    -ms-flex-positive: 1;
    flex-grow: 1;
    width: 109px;
    padding: 5px 0;
    margin: 5px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: left;
    justify-content: left;
    background-color: rgba(0, 0, 0, 0.302);
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    color: #ccc;
    text-transform: uppercase;
    text-decoration: none;
}
@media screen and (max-width: 468px) {
    #index
        #wrapper1
        #wrapper3
        #wrapper5
        #websiteDataHolder
        .websiteData
        .websiteList
        .website {
        -ms-flex-pack: center;
        justify-content: center;
    }
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData
    .websiteList
    .website:hover {
    color: #fff;
    background-color: #000;
}
#index
    #wrapper1
    #wrapper3
    #wrapper5
    #websiteDataHolder
    .websiteData
    .websiteList
    .website
    .icon {
    width: 30px;
    height: 30px;
    margin: 0 5px 0 7px;
    display: inline-block;
    background-repeat: no-repeat;
    background-size: initial;
    background-position: 50%;
}

#agent-box {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    padding: 0 2px;
}
@media screen and (max-width: 1280px) {
    #agent-box {
        max-width: 780px;
        margin: auto;
    }
}
@media screen and (min-width: 768px) and (max-width: 1280px) {
    #agent-box > a {
        width: 33%;
        -ms-flex: inherit;
        flex: inherit;
    }
    #agent-box > a:nth-child(3n) {
        border-radius: 0 3px 3px 0;
    }
    #agent-box > a:nth-child(3n + 1) {
        border-radius: 3px 0 0 3px;
    }
}
@media screen and (min-width: 600px) and (max-width: 768px) {
    #agent-box > a {
        width: 32.8%;
        -ms-flex: inherit;
        flex: inherit;
    }
}
@media screen and (max-width: 768px) {
    #agent-box {
        max-width: 580px;
        margin: auto;
    }
}
@media screen and (min-width: 300px) and (max-width: 600px) {
    #agent-box > a {
        width: 49.5%;
    }
    #agent-box > a:nth-child(2n) {
        border-radius: 0 3px 3px 0;
    }
    #agent-box > a:nth-child(odd) {
        border-radius: 3px 0 0 3px;
    }
}
@media screen and (max-width: 300px) {
    #agent-box > a {
        border-radius: 3px;
        width: 100%;
    }
}
@media screen and (min-width: 1280px) {
    #agent-box > a {
        width: 16.5%;
    }
    #agent-box > a:first-child {
        border-radius: 3px 0 0 3px;
    }
    #agent-box > a:last-child {
        border-radius: 0 3px 3px 0;
    }
}
#agent-box > a {
    color: #fff;
    text-decoration: none;
    background-color: hsla(0, 0%, 93%, 0.3);
    line-height: 50px;
    text-align: center;
    margin: 1px 0;
}
#agent-box > a:hover {
    background-color: #ff9200;
}
</style>
