function TreatmentCreateForm(props) {
    return(

    <div>
        <div className="card">
            <div className="card-header">
            soap
            </div>
            <div className="card-body">
                <div>
                S : <input type="text" />
                </div>
                <div>
                O : <input type="text" />
                </div>
                <div>
                A : <input type="text" />
                </div>
                <div>
                P : <input type="text" />
                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
            진단 검사 목록
            </div>
            <div className="card-body">
                <div>
                    <select name="category">
                    <option value="" selected="selected">진단 검사 선택</option>
                        <option value="">혈액검사</option>
                        <option value="" >영상검사</option>
                        <option value="">유리검사</option>
                    </select>
                </div>
                <div>

                </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header">
            의사소통 메모
            </div>
            <textarea rows="5" cols="23">
            당일 검사 요청

            </textarea>
        </div>
    </div> 
    );
}
export default TreatmentCreateForm;
