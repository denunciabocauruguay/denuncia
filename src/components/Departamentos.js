import React from "react";
import PropTypes from "prop-types";
import { FormControl, FormHelperText } from "material-ui/Form";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import Select from "material-ui/Select";

const Departamentos = ({ departamento, handleChange }) => (
  <FormControl>
    <Select
      value={departamento}
      onChange={handleChange}
      input={<Input name="departamento" id="departamento" />}
    >
      <MenuItem value="Montevideo">Montevideo</MenuItem>
      <MenuItem value="Canelones">Canelones</MenuItem>
      <MenuItem value="Maldonado">Maldonado</MenuItem>
      <MenuItem value="Salto">Salto</MenuItem>
      <MenuItem value="Colonia">Colonia</MenuItem>
      <MenuItem value="Paysandú">Paysandú</MenuItem>
      <MenuItem value="San José">San José</MenuItem>
      <MenuItem value="Rivera">Rivera</MenuItem>
      <MenuItem value="Tacuarembó">Tacuarembó</MenuItem>
      <MenuItem value="Cerro Largo">Cerro Largo</MenuItem>
      <MenuItem value="Soriano">Soriano</MenuItem>
      <MenuItem value="Artigas">Artigas</MenuItem>
      <MenuItem value="Rocha">Rocha</MenuItem>
      <MenuItem value="Florida">Florida</MenuItem>
      <MenuItem value="Lavalleja">Lavalleja</MenuItem>
      <MenuItem value="Durazno">Durazno</MenuItem>
      <MenuItem value="Río Negro">Río Negro</MenuItem>
      <MenuItem value="Treinta y Tres">Treinta y Tres</MenuItem>
      <MenuItem value="Flores">Flores</MenuItem>
    </Select>
    <FormHelperText>
      Selecciona el departamento en el que se encuentra la boca de drogas.
    </FormHelperText>
  </FormControl>
);

Departamentos.propTypes = {
  departamento: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Departamentos;
