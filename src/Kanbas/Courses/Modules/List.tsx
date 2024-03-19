import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./reducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const modulesList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="row">
        <span className="float-end">
      <div className="wd-modules-buttons">
      <button className="button-primary">Collapse All</button>
      <button className="button-primary">View Progress</button>
      <button className="button-primary">
      <FaCheckCircle className="text-success" /> Publish All
      </button>
      <button className="button-secondary">+ Module</button>
      <button className="button-primary">
      <FaEllipsisV className="me-2" />
      </button>
    </div>
    </span>
    </div>
    <hr/>
      <ul className="list-group wd-modules">
      <li className="list-group-item">
      <span className="float-end">
      <button className="btn btn-success" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button className="btn btn-secondary" onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
      </span>
      <div className="row">
        <input className="form-control" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </div>
      </li>
        {modulesList.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index}
            className="list-group-item" 
            onClick={() => setSelectedModule(module)}>
              <span className="float-end">
              <button className="btn btn-secondary"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
              <button className="btn btn-danger"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            </span>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson:any, index:any) => (
                  <li className="list-group-item" key={index}>
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;

