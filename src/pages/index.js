import React from "react";
import PropTypes from "prop-types";
import Button from "material-ui/Button";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import { withStyles } from "material-ui/styles";
import withRoot from "../components/withRoot";
import Departamentos from "../components/Departamentos";

const styles = {
  root: {
    textAlign: "center",
    paddingTop: 40,
    paddingLeft: "10%",
    paddingRight: "10%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  form: {
    marginBottom: 40,
    textAlign: "start",
    maxWidth: 600
  },
  button: {
    width: 150,
    height: 50,
    marginBottom: 40
  }
};

class Index extends React.Component {
  state = {
    open: false,
    departamento: "Montevideo",
    direccion: ""
  };

  handleClick = () => {
    var link = `mailto:denunciabocauruguay@gmail.com?&subject=
      ${escape("Denuncia boca de drogas Uruguay")}
      &body=
      Departamento: ${this.state.departamento}%0A%0A
      Dirección: ${this.state.direccion}%0A%0A
      Denuncia: ${this.state.denuncia}`;

    window.location.href = link;
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className={this.props.classes.root}>
        <Typography type="display1" gutterBottom>
          Denunciá una boca de drogas en Uruguay 🇺🇾.
        </Typography>
        <Typography
          className={this.props.classes.description}
          type="subheading"
        >
          Las bocas de drogas son un problema grave en nuestro país.
        </Typography>
        <Typography type="subheading" style={{ marginBottom: 20 }}>
          Ayudemos a cerrarlas entre todos.
        </Typography>
        <Typography type="title">
          LA DENUNCIA ES ANÓNIMA
        </Typography>
        <Typography type="title" gutterBottom style={{ marginBottom: 20 }}>
          esta página no sabe quién eres 🙂.
        </Typography>
        <Typography
          className={this.props.classes.description}
          type="display1"
          style={{ marginBottom: 60 }}
        >
          Por favor completa el formulario 👇.
        </Typography>
        <div className={this.props.classes.form}>
          <Departamentos
            departamento={this.state.departamento}
            handleChange={this.handleChange}
          />
          <TextField
            id="direccion"
            label="Dirección"
            name="direccion"
            value={this.state.direccion}
            helperText="Ingresa la dirección de la boca de drogas."
            margin="dense"
            fullWidth
            onChange={this.handleChange}
            placeholder="Ejemplo: 18 de julio XXXX"
            style={{ marginTop: 20 }}
          />
          <TextField
            id="denuncia"
            label="Tu denuncia"
            name="denuncia"
            value={this.state.denuncia}
            helperText="Ingresa tu denuncia, tómate tu tiempo. Ingresa tu denuncia, tómate tu tiempo. Datos importantes: Horarios, por qué sospechas que es una boca de drogas, hace cuanto tiempo, etc"
            margin="dense"
            fullWidth
            onChange={this.handleChange}
            placeholder="Escribe aquí..."
            style={{ marginTop: 20 }}
            multiline
          />
        </div>
        <Button
          raised
          color="accent"
          onClick={this.handleClick}
          className={this.props.classes.button}
        >
          Denunciar
        </Button>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Index));
