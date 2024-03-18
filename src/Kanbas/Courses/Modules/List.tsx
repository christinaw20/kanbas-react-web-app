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
  return (
    <>
      {/* <!-- Add buttons here --> */}
      <div className="row">
        <span className="float-end">
      <div className="wd-modules-buttons">
      <button className="btn-primary">Collapse All</button>
      <button className="btn-primary">View Progress</button>
      <button className="btn-primary">
      <FaCheckCircle className="text-success" /> Publish All
      </button>
      <button className="btn-secondary">+ Module</button>
      <button className="btn-primary">
      <FaEllipsisV className="me-2" />
      </button>
    </div>
    </span>
    </div>
    <hr/>
      <ul className="list-group wd-modules">
      <li className="list-group-item">
      <button onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button onClick={() => dispatch(updateModule(module))}>
          Update
        </button>
        <input value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
        />
        <textarea value={module.description}
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
        />
      </li>
        {modulesList.filter((module) => module.course === courseId).map((module, index) => (
          <li key={index}
            className="list-group-item">
              <button
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
              <button
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {/* {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson, index) => (
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
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;

