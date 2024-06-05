const GenderCheckbox = () => {
    return (
        <div className="flex">
            <div className="form-control mr-2">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">Male</span>
                    <input type='checkbox' className="checkbox checkbox-md border-slate-500 " />
                </label>
            </div>
            <div className="form-control ml-2">
                <label className="label gap-2 cursor-pointer">
                    <span className="label-text">Female</span>
                    <input type='checkbox' className="checkbox checkbox-md border-slate-950" />
                </label>
            </div>
        </div>
    );
};

export default GenderCheckbox;