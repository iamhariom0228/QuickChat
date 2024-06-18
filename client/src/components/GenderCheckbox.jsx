const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
    return (
      <div className="flex">
        <div className="form-control mr-2">
          <label
            className={`label gap-2 cursor-pointer ${
              selectedGender === "male" ? "selected" : ""
            }`}
          >
            <span className="label-text">Male</span>
            <input
              type="checkbox"
              className="checkbox checkbox-md border-slate-500 "
              checked={selectedGender === "male"}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>
        <div className="form-control ml-2">
          <label
            className={`label gap-2 cursor-pointer ${
              selectedGender === "female" ? "selected" : ""
            }`}
          >
            <span className="label-text">Female</span>
            <input
              type="checkbox"
              className="checkbox checkbox-md border-slate-950"
              checked={selectedGender === "female"}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
      </div>
    );
};

export default GenderCheckbox;