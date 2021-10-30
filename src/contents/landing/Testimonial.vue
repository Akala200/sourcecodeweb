<template>
    <div class="section-padding" id="testimonial">
        <div class="container">
            <div class="row py-lg-5 justify-content-center">
                <div class="col-xl-7">
                    <div class="section_heading">
                        <span>CEO</span>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-xl-8 col-md-11">
                    <div class="testimonial-content">
                        <carousel
                            :per-page="1"
                            :loop="true"
                            :navigation-enabled="true"
                            :pagination-enabled="false"
                            navigation-prev-label="<i class='la la-arrow-left'></i>"
                            navigation-next-label="<i class='la la-arrow-right'></i>"
                        >
                            <slide>
                                <div class="row align-items-center">
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-img">
                                            <img class="img-fluid" src="/images/ceo1.png" alt="">
                                        </div>
                                    </div>
                                    <div class="col-xl-6 col-md-6">
                                        <div class="customer-review">
                                            <p>
                                            </p>
                                            <div class="customer-info">
                                                <h5>Mr Iwuanyanwu Fredrick</h5>
                                                <p>CEO, Source Code</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    export default {
        components: {Carousel, Slide}
    }
</script>
