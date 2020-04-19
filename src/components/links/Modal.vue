<!-- eslint-disable -->
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            {{title}}

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription">
            <slot></slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer"></slot>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script>
/* eslint-disable */
  export default {
    name: 'modal',
    props: {
        title: {
            type: String
        }
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
</script>
<style>
/* eslint-disable */
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
  }

  .modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    min-width: 450px;
    max-width: 750px;
  }

  .modal-header,
  .modal-footer {
    padding: 15px;
    display: flex;
  }

  .modal-header {
    border-bottom: 1px solid #eeeeee;
    color: #fff;
    justify-content: space-between;
    background-color: black;
    font-size: 27px;
    font-weight: 600;
  }

  .modal-footer {
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
    text-align: center;
  }

  .btn-close {
    border: none;
    font-size: 27px;
    cursor: pointer;
    font-weight: bold;
    color: #fff;
    background: transparent;
  }
</style>