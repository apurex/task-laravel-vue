<template>
  <div class="home">
    
    <div class="row py-5">

      <div class="col-md-4">
        <form @submit.prevent="save(form)">
          <div class="form-group">
            <label for="exampleFormControlInput1">Titulo</label>
            <input v-model="form.title" type="text" class="form-control" id="exampleFormControlInput1" placeholder="">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Descripcion</label>
            <textarea v-model="form.description" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <div class="form-group">
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </form>
      </div>

      <div class="col-md-8">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Titulo</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr :key="task.id" v-for="task in tasks">
              <th scope="row">
                {{ task.id }}
              </th>
              <td>
                {{ task.title }}
              </td>
              <td>
                {{ task.description }}
              </td>
              <td>
                <button @click="edit(task)" type="button" class="btn btn-warning btn-sm mr-2">Edit</button>
                <button @click="destroy(task.id)" type="button" class="btn btn-danger btn-sm">X</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import taskService from '../services/taskService'

export default {
  name: 'Home',
  data() {
    return {
      id: 0,
      form: {
        id: 0,
        title: '',
        description: ''
      },
      tasks: [],
    }
  },
  methods: {
    setForm() {
      return {
        id: 0,
        title: '',
        description: ''
      }
    },
    list() {
      taskService.list()
      .then(resp => {
        console.log(resp);
        const tasks = resp.data.data;
        this.tasks = tasks;
      })
      .catch(error => {
        console.error(error);
      })
    },
    edit(task) {
      this.form = task;
    },
    save(values) {
      if (values.id) {
        taskService.update(values.id, values)
        .then(resp => {
          console.log(resp);
          this.form = this.setForm();
          this.list();
        })
        .catch(error => {
          console.error(error);
        });
      } else {
        taskService.store(values)
        .then(resp => {
          console.log(resp);
          this.form = this.setForm();
          this.list();
        })
        .catch(error => {
          console.error(error);
        });
      }
    },
    destroy(id) {
      taskService.delete(id)
      .then(resp => {
        console.log(resp);
        this.list();
      })
      .catch(error => {
        console.log(error);
      });
    }
  },
  mounted() {
    this.list();
  },
  components: {
    HelloWorld
  }
}
</script>
