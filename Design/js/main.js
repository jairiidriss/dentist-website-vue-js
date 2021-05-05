new Vue({
    el: '#testimonials',
    data:
    {
        testimonials : [
            {
                title: "The best clinic in town",
                p: "Voluptate tempore aperiam explicabo doloremque sunt possimus neque quo hic repudiandae fugit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit."
            },
            {
                title: "Quick, easy & reliable",
                p: " Doloremque ipsum dolor sit amet voluptate tempore aperiam explicabo doloremque  adipisicing elit. sunt possimus neque quo hic repudiandae fugit tenetur."
            },
            {
                title: "The true professionals",
                p: "Consectetur adipisicing elit. Voluptate tempore aperiam lorem ipsum dolor sit amet  doloremque sunt possimus neque quo hic repudiandae fugit tenetur."
            },
            {
                title: "Highly Recommended",
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore aperiam explicabo doloremque sunt possimus neque quo hic repudiandae fugit tenetur."
            },
            {
                title: "Professional services",
                p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate tempore aperiam explicabo doloremque sunt possimus neque quo hic repudiandae fugit tenetur."
            }
        ],
        activeTestimonial : [0, 1, 2]
    },
    computed: {
        currentTestimonial() {
            currTest = [];
            for(let i = 0; i < this.activeTestimonial.length; i++)
            {
                currTest.push(this.testimonials[this.activeTestimonial[i]]);
            }
            return currTest;
        }
    },
    methods : {
        nextTestimonial : function(){
            var active = [];
            for(let i = 0; i < this.activeTestimonial.length; i++)
            {
                if(this.activeTestimonial[i] + 1 >= this.testimonials.length) 
                {
                    active.push(0);
                }
                else
                {
                    active.push(this.activeTestimonial[i] + 1);
                }
            }
            this.activeTestimonial = active;
        },
        prevTestimonial : function(){
            var active = [];
            for(let i = 0; i < this.activeTestimonial.length; i++)
            {
                if(this.activeTestimonial[i] - 1 < 0) 
                {
                    active.push(this.testimonials.length - 1);
                }
                else
                {
                    active.push(this.activeTestimonial[i] - 1);
                }
            }
            this.activeTestimonial = active;
        }
    }
})

new Vue({
    el: "#services-2",
    data : {
        services : [
            {
                tab: "Root Canal Specialist",
                title: "Fast & professional treatments for every patient",
                p: "Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.",
                image: "Design/images/service-img-1.jpg"
            },
            {
                tab: "Alignment Specialist",
                title: "Easiest way to do something truly important for your smile",
                p: "Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.",
                image: "Design/images/service-img-2.jpg"
            },
            {
                tab: "Cosmetic Dentistry",
                title: "Fast & professional treatments for every patient",
                p: "Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.",
                image: "Design/images/service-img-3.jpg"
            },
            {
                tab: "Live Dental Advisory",
                title: "Easiest way to do something truly important for your smile",
                p: "Duis sed odio sit amet nibh vulputate cursus a sit am maur Morbi accumsan sed ipsum velit. Nam nec tellus a od tincidunt auctor a ornare odio. Alia ludus animal ius te, ea amet necessitatibus vix. Solum persius voluptaria ad nostro quis odio scriptorem ex vim.",
                image: "Design/images/service-img-4.jpg"
            }
        ],
        activeService: 0
    },
    methods : {
        toggleTab: function(clickedService)
        {
            this.activeService = clickedService;
        }
    }
})

new Vue({
    el: "#contact-form",
    data: {
        first_name: '',
		last_name: '',
        email: '',
        phone: '',
        message: ''
    },
    methods:{
        checkForm: function(event){
            if( this.first_name && this.last_name && this.validEmail(this.email) && this.phone && this.message )
            {
                return true;
            }
            if( !this.first_name)
            {
                this.first_name = null;
            }
            if( !this.last_name)
            {
                this.last_name = null;
            }

            if(!this.validEmail(this.email))
            {
                this.email = null;
            }
            
            if( !this.phone)
            {
                this.phone = null;
            }

            if( !this.message)
            {
                this.message = null;
            }

            event.preventDefault();
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
})