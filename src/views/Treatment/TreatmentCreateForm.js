function TreatmentCreateForm(props) {
    return (

        <div>
            <div className="TreatmentCreateForm_title">
                진료 등록
            </div>
            <div className="TreatmentCreateForm_border">
                <div className="TreatmentCreateForm_1">
                    <div className="TreatmentCreateForm_1_title">
                        Subjective Objective Assessment Plan
                    </div>
                    <div className="TreatmentCreateForm_1_content">
                        <div className="TreatmentCreateForm_s">
                            S  &emsp;<input type="text" />
                        </div>
                        <div className="TreatmentCreateForm_o">
                            O  &emsp;<input type="text" />
                        </div>
                        <div className="TreatmentCreateForm_a">
                            A  &emsp;<input type="text" />
                        </div>
                        <div className="TreatmentCreateForm_p">
                            P  &emsp;<input type="text" />
                        </div>
                    </div>
                </div>
                <div className="TreatmentCreateForm_2">
                    <div className="TreatmentCreateForm_2_title">
                        진단 검사 목록
                    </div>
                    <div className="TreatmentCreateForm_2_content">
                        <div className="reatmentCreateForm_select">
                            <select name="category">
                                <option value="" selected="selected">진단 검사 선택</option>
                                <option value="">혈액검사</option>
                                <option value="" >영상검사</option>
                                <option value="">유리검사</option>
                            </select>
                        </div>
                        <div className="reatmentCreateForm_checkbox">
                            <div><input type="checkbox" />  검사1</div>
                            <div><input type="checkbox" />  검사2</div>
                            <div><input type="checkbox" />  검사3</div>
                            <div><input type="checkbox" />  검사4</div>
                        </div>
                    </div>
                </div>
                <div className="TreatmentCreateForm_3">
                    <div className="TreatmentCreateForm_3_title">
                        의사소통 메모
                    </div>
                    <textarea className="TreatmentCreateForm_3_content" rows="5" cols="23">
                        당일 검사 요청
                    </textarea>
                </div>
            </div>
        </div>
    );
}
export default TreatmentCreateForm;
