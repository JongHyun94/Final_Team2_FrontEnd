function TreatmentCreateForm(props) {
    return (

        <div>
            <div className="TreatmentCreateForm_title">
                진료 등록
            </div>
            <div className="TreatmentCreateForm_border">
                <div className="TreatmentCreateForm_1">
                <div className="TreatmentCreateForm_1_border">
                    <div className="TreatmentCreateForm_1_title">
                        Subjective &emsp;/&emsp; Objective &emsp;/&emsp; Assessment &emsp;/&emsp; Plan
                    </div>
                    <div className="TreatmentCreateForm_1_content">
                        <div>
                            S &emsp;<input className="TreatmentCreateForm_1_content_input" type="text" />
                        </div>
                        <div>
                            O &emsp;<input className="TreatmentCreateForm_1_content_input" type="text" />
                        </div>
                        <div>
                            A &emsp;<input className="TreatmentCreateForm_1_content_input" type="text" />
                        </div>
                        <div>
                            P &emsp;<input className="TreatmentCreateForm_1_content_input" type="text" />
                        </div>
                    </div>
                </div>
            </div>
                <div className="TreatmentCreateForm_2">
                <div className="TreatmentCreateForm_2_border">
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
                            <div className="reatmentCreateForm_checkbox_1"><input  type="checkbox" />  고밀도 콜레스테롤(High density lipoprotein cholesterol)</div>
                            <div className="reatmentCreateForm_checkbox_2"><input type="checkbox" />  당뇨 검사(Diabetes mellitus Tset)</div>
                            <div className="reatmentCreateForm_checkbox_3"><input type="checkbox" />  신경 특이 에놀라제(Neuron Specific Enolase)</div>
                            <div className="reatmentCreateForm_checkbox_4"><input type="checkbox" />  빈혈 검사(Anemia Test)</div>
                        </div>
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
