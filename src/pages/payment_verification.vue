<template>
<div>
    <auth />
 <div class="container">
	<div class="row text-center">
        <div class="col-lg-12 col-sm-offset-3" style="padding: 90px;">
        <br><br> <h2 style="color:#0fad00">Success</h2>
        <img src="/images/check.png" style="width: 150px;"/>
        <h3>Dear, Customer</h3>
        <p style="font-size:20px;color:#5C5C5C; padding-left: 20%;padding-right: 20%;">Your Payment was successful</p>
    <br><br>
        </div>
        
	</div>
    <div class="row">

    </div>
</div>
</div>
</template>

<script>
export default {
    data() {
        return {
            okText: "",
            email: "",
            currentStage:"",
            error: ""
        };
    },
    components: {
        
    },
    methods: {
     
    },

    created() {
        this.getUserData()
    },
}
</script>

<style lang="css" scoped>
.success-page {
    display: block;
    margin: 0 auto;
    text-align: center;
    position: relative;
    transform: perspective(1px) translateY(50%)
}

.buttonSection {
    margin-top: 200px;
}

.success-page img {
    max-width: 300px;
    display: block;
    margin: 0 auto;
}

.btn-view-orders {
    display: block;
    border: 1px solid #47c7c5;
    width: 100px;
    margin: 0 auto;
    margin-top: 45px;
    padding: 10px;
    color: #fff;
    background-color: #47c7c5;
    text-decoration: none;
    margin-bottom: 20px;
}

h2 {
    color: #47c7c5;
    margin-top: 25px;

}

a {
    text-decoration: none;
}

button {
    outline: none !important;
}

.button--continue2 {
    border-radius: 76px 76px 76px 76px;
    padding: 10px 80px;
    background-color: #78ae42;
    color: #ffffff;
    text-decoration: none;
    font-weight: 500;
    width: 100%;
    height: 90px;
    font-size: 20px;
    margin-right: 30px;
    margin-top: 30%;
}

@media only screen and (max-width: 400px) {

  .success-page {
    display: block;
    margin: 0 auto;
    text-align: center;
    position: relative;
  }

  .note {
      font-size: 20px;
  }
  
}

</style>
