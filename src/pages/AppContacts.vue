<script>
import axios from 'axios';
export default {
    name: 'AppContacts',
    data() {
        return {
            name: null,
            email: null,
            message: null,
            errors: null,
            loading: false,
            success: false
        }
    },
    methods: {
        sendMessage() {
            const data = {
                'name': this.name,
                'email': this.email,
                'message': this.message
            }
            axios
                .post('http://localhost:8000/api/lead', data)
                .then(
                    response => {
                        console.log(response);
                        if (response.data.success) {
                            this.success = true;
                            this.errors = null;

                            //form reset
                            this.name = '';
                            this.email = '';
                            this.message = '';
                        } else {
                            this.success = false;
                            this.errors = response.data.errors;
                        }
                    }
                )
        }
    }
}
</script>

<template>

    <div class="container">

        <template v-if="success">

            <div class="alert alert-success" role="alert">
                <strong>Success</strong>
            </div>

        </template>


        <h1>AppContacts</h1>
        <form @submit.prevent="sendMessage()">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" name="name" id="" aria-describedby="emailHelpId"
                    placeholder="Mario" v-model="name" />
                <small class="form-text text-muted">Help text</small>
            </div>

            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" name="email" id="" aria-describedby="emailHelpId"
                    placeholder="abc@mail.com" v-model="email" />
                <small class="form-text text-muted">Help text</small>
            </div>

            <div class="mb-3">
                <label for="messge" class="form-label">Message</label>
                <textarea class="form-control" name="messge" id="" rows="3" v-model="message"></textarea>
                <small class="form-text text-muted">Message</small>
            </div>

            <button type="submit" class="btn btn-primary" @click="sendMessage()">
                Submit
            </button>

        </form>
    </div>




</template>

<style scoped></style>