
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

    async sendDates(){
      //SPREAD Operator
      console.log({...this.formData})
      this.user = {
        nombre: this.formData.nombre,
        apellido: this.formData.apellido,
        edad: this.formData.edad,
        email: this.formData.email
      };
      //Borro la información despues de enviarla
      let url = "https://609dbecb33eed800179570a4.mockapi.io/usuarios";
      await this.axios.post(url,this.user).then(resp => console.log(resp)).catch(error => console.log(error));

      this.formData = this.getInicialData()
      this.formState._reset()
      this.user = {};
    }

  }
}


