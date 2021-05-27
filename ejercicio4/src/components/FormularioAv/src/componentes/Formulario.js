
export default {
  name: 'src-componentes-formulario',
  components: {},
  props: [],
  data () {
    return {
      formData : this.getInicialData(),
      formState : {},
      nombreLengthMin : 3,
      nombreLengthMax : 10,
      edadMin : 18,
      edadMax : 120,
      lista: [],
      user:{
        nombre:'',
        apellido:'',
        edad:'',
        email:''
      }
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    getInicialData() {
      return {
        nombre: '',
        apellido: '',
        edad: '',
        email: ''
      }
    },

    enviar() {
      //SPREAD Operator
      console.log({...this.formData})
      this.user = {
        nombre: this.formData.nombre,
        apellido: this.formData.apellido,
        edad: this.formData.edad,
        email: this.formData.email
      };
      //Borro la información despues de enviarla
      this.lista.push(this.user);
      this.formData = this.getInicialData()
      this.formState._reset()
      this.user = {};
    }

  }
}


