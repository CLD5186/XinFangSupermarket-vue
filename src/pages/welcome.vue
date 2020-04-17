<template>
    <div class="welcome">
        <div style="height: 100vh">
            <div class="center">
                <div class="left">
                    <img src="../assets/welcome/1.png" @click="tip(0)"/>
                    <img src="../assets/welcome/2.png" @click="tip(1)"/>
                    <img src="../assets/welcome/3.png" @click="tip(0)"/>
                </div>
                <img src="../assets/welcome/0.jpg"/>
                <div class="right">
                    <img src="../assets/welcome/4.png" @click="tip(0)"/>
                    <img src="../assets/welcome/5.png" @click="tip(0)"/>
                    <img src="../assets/welcome/6.png" @click="tip(0)"/>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            tip(val) {
                !val && this.$message.warning('功能开发中')
                val && this.$router.push('/index')
            }
        }
    }
</script>
<style lang="less" scoped>
    .welcome {
        font-size: 0;
        position: fixed;
        top: 0px;
        left: 0px;
        overflow: hidden;
        transform-origin: left top;
        z-index: 999;
        background-image: url("../assets/welcome/welcome_bg.png");
        background-size: 100% 100%;
        width: 100vw;
        height: 100vh;

        .center {
            position: absolute;
            left: 50%;
            margin-left: -745px;
            top: 50%;
            margin-top: -280px;
            width: 1490px;
            height: 640px;
            display: flex;
            justify-content: center;
            align-items: center;

            > img {
                width: 640px;
                height: 640px;
            }
        }

        .left, .right {
            position: absolute;
            width: 490px;
            height: 640px;
            left: 50%;
            top: 10vh;

            img {
                &:nth-child(2) {
                    margin: 17px 0;
                }
            }
        }

        .left {
            margin-left: -755px;

            img {
                cursor: pointer;
                &:first-child, &:last-child {
                    margin-left: 3px
                }
            }
        }

        .right {
            margin-left: 345px;

            img {

                cursor: pointer;
                &:first-child, &:last-child {
                    margin-left: -83px;
                }
            }
        }
    }
</style>
