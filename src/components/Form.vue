<template>
    <div>
    <form v-if="!complete" id="form" @submit="sendForm" action="/something" method="post" novalidate="true">
        <p v-if="errors.length" class="text-sm text-red">
        <b>Please correct the following errors:</b>
        <ul>
            <li v-for="error in errors" :key="error" class="text-xs">{{ error }}</li>
        </ul>
        </p>
        <p>
            <label for="name">First Name</label>
            <input type="text" name="firstname" id="firstname" v-model="firstname">
        </p>
        <p>
            <label for="name">First Name</label>
            <input type="text" name="lastname" id="lastname" v-model="lastname">
        </p>
        <p>
            <label for="email">Email</label>
            <input type="email" name="email" id="email" v-model="email">
        </p>
        <p>
            <label for="name">Telephone</label>
            <input type="text" name="phone" id="phone" v-model="phone">
        </p>
        <p>
            <label for="name">Postcode</label>
            <input type="text" name="postcode" id="postcode" v-model="postcode">
        </p>
        <p>
            <button class="bg-green text-white p-2 w-full rounded text-sm mt-3" type="submit">
                <template v-if="loading">
                    <font-awesome-icon  icon="cog" class="fa-spin"></font-awesome-icon>
                </template>
                <template v-else>
                    Submit
                </template>
            </button>  
        </p>
        <p v-if="serverError" class="text-red text-xs">
            There was a problem connecting to our servers.
        </p>
    </form>
    <div v-else class="text-center">
        <font-awesome-icon  icon="check-circle" class="text-green text-4xl mb-2"></font-awesome-icon>
        <p>Thanks {{firstname}}!</p>
        <p>We have recieved your enquiry and someone will be in touch soon.</p>
    </div>
    </div>
</template>

<script>
export default {
    name: 'Form',
    data() {
        return {
        errors: [],
        firstname: null,
        lastname: null,
        phone: null,
        email: null,
        postcode: null,
        complete: false,
        loading: false,
        serverError: false
        }
    },
    methods: {
        sendForm(e) {
            if(this.loading){
                return
            }

            e.preventDefault()
            this.errors = []
            this.serverError = false
            this.loading = true

            if(this.validateForm()) {
                fetch('https://jsonplaceholder.typicode.com/posts', {
                    method: 'POST',
                    body: JSON.stringify({
                        firstname: this.firstname,
                        lastname: this.lastname,
                        phone: this.phone,
                        email: this.email,
                        postcode: this.postcode
                    }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    }
                })
                .then((response) => response.json())
                .then((json) => {
                    if (json) {
                        this.complete = true
                    }
                    this.loading = false
                }).catch(() => {
                    this.serverError = true
                    this.loading = false
                })
            } else {
                this.loading = false
            }
            
            
        },
        validateForm() {
        if (!this.firstname) {
            this.errors.push("First Name required.")
        }

        if (!this.lastname) {
            this.errors.push("Last Name required.")
        }

        if (!this.phone) {
            this.errors.push("Telephone number required.")
        }

        if (!this.postcode) {
            this.errors.push("Postcode required.")
        }

        if (!this.email) {
            this.errors.push("Email required.")
        } else if (!this.validEmail(this.email)) {
            this.errors.push("Valid email required.")      
        }

        if (!this.errors.length) { 
            return true 
        } else {
            return false
        }
        },
        validEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
        }
    }
};
</script>

<style lang="scss">
#form{
  p{
    @apply py-2
  }
  label{
    @apply font-bold text-sm w-full inline-block;
    color:#666;
  }
  input{
    @apply w-full rounded p-2;
    border:solid 1px #aaa;
  }
  input[name="phone"]{
      width:75%
  }
  input[name="postcode"]{
      width:50%
  }
  button:hover{
      background: darken(#74b800, 5);
  }
}
</style>