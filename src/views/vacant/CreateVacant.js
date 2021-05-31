import React, {Component, Fragment} from 'react'
import Field from '../../components/Field'
import Selector from '../../components/Selector';

class Skill {
  constructor(id, name, weight) {
    this.id = id;
    this.name = name;
    this.weight = weight;
  }
};

const skillsOptions = [{
  value: "learnability",
  text: "Aprendizaje"
}, {
  value: "communication",
  text: "Comunicación"
}, {
  value: "creativity",
  text: "Creatividad"
}, {
  value: "empaty",
  text: "Empatía"
}, {
  value: "leadership",
  text: "Liderazgo"
}, {
  value: "resilience",
  text: "Resiliencia"
}, {
  value: "teamwork",
  text: "Trabajo en equipo"
}];

const weightsOptions = [1, 2, 3, 4, 5].map((e) => {
  e = e.toString()
  return {
    value: e,
    text: e
  }
});

export default class CreateVacant extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: 1, // auto-increment
      role: "",
      salary: "",
      description: "",
      skills: []
    };

    //this.addSkill("", "");
  }

  setRole = (val) => {
    this.setState({
      role: val
    });
  }

  setSalary = (val) => {
    this.setState({
      salary: val
    });
  }

  setDescription = (val) => {
    this.setState({
      description: val
    });
  }

  onChangeSkill = (val, skill) => {
    var newSkills = this.state.skills.slice();
    newSkills[newSkills.indexOf(skill)].name = val;
    this.setState({
      skills: newSkills
    });
  }

  onChangeWeight = (val, skill) => {
    var newSkills = this.state.skills.slice();
    newSkills[newSkills.indexOf(skill)].weight = val;
    this.setState({
      skills: newSkills
    });
  }

  addSkill = () => {
    var newSkills = this.state.skills.slice();
    newSkills.push(new Skill(this.state.id,
      skillsOptions[0].value, weightsOptions[0].value));
    this.setState({
      id: this.state.id + 1,
      skills: newSkills
    }, () => {
      console.log(this.state.skills);
    });
  }

  deleteSkill = (skill) => {
    var newSkills = this.state.skills.slice();
    newSkills.splice(newSkills.indexOf(skill), 1);
    this.setState({
      skills: newSkills
    }, () => {
      console.log(this.state);
    });
  }

  onSubmit = () => {

  };

  render() {
    return (
      <div className="container-fluid p-0 m-0 row justify-content-center gray-light">
        <div className="col-12 col-sm-9 col-md-7 col-lg-5 col-xl-4 p-5 light">
          <h3 className="my-3">Crear Vacante</h3>
          <form>
            <Field type="text" id="role" label="Cargo" placeholder=""
              onChange={this.setRole} />
            <Field type="number" id="salary" label="Salario" placeholder=""
              min={0} onChange={this.setSalary} />
            <Field type="text" id="description" label="Descripción" placeholder=""
              onChange={this.setDescription} />

            <h5 className="mt-5">Habilidades Requeridas</h5>

            <ul>
              {
                this.state.skills.map((skill) =>
                  <li key={skill.id}>
                    <hr />
                    <div className="d-flex justify-content-between">
                      <Selector label="Habilidad" options={skillsOptions}
                        onChange={(val) => this.onChangeSkill(val, skill)} />
                      <button type="button" className="btn dark px-3" onClick={() => this.deleteSkill(skill)}>
                        X
                      </button>
                    </div>
                    <Selector label="Relevancia" options={weightsOptions}
                      onChange={(val) => this.onChangeWeight(val, skill)} />
                  </li>
                )
              }
            </ul>

            <div className="row">
              {
                this.state.skills.length < 5 &&
                <button type="button" className="btn d-block dark my-3" onClick={this.addSkill}>
                  Agregar Habilidad
                </button>
              }
            </div>

            <button type="submit" className="btn d-block primary my-3" onSubmit={this.onSubmit}>
              Guardar
            </button>
          </form>
        </div>
      </div>
    );
  }
}
