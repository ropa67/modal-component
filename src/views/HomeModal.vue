<template>
    <div 
    class="flex flex-col items-center py-20">
        <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="toggleModal">Show Modal
        </button>
            <modal-component
            v-show="modalOpen"
            @close-modal="toggleModal">
            </modal-component>
    </div>
</template>

<script >
import ModalComponent from '@/components/ModalComponent.vue'

export default {
    components: {
        ModalComponent
    },
    watch:{
    showing(value) {
      if (value) {
        return document.querySelector('body').classList.add('overflow-hidden');
      }
      document.querySelector('body').classList.remove('overflow-hidden');
    }
    },
    data() {
        return {
            modalOpen: false
        }
    },
    methods: {
        toggleModal() {
            this.modalOpen = !this.modalOpen
        }
    },
}
</script>
