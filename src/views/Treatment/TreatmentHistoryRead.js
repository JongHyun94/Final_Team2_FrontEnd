function TreatmentHistoryRead(props) {
    return(

       <div>
           <div className="TreatmentHistoryRead_title">
           진료상세
           </div>
           <div className="TreatmentHistoryRead_border">
                <div className="TreatmentHistoryRead_1">
                <table className="table table-bordered TreatmentHistoryRead_1_table">
                    <tr>
                        <th className="text-center" bgcolor="lightgrey" bordercolor="white">Subjective</th>
                            <td width="80%">목 아픔</td>
                    </tr>
                    <tr>
                        <th className="text-center" bgcolor="lightgrey" bordercolor="white">Objective</th>
                        <td width="80%">인후염</td>
                    </tr>
                    <tr>
                        <th className="text-center" bgcolor="lightgrey" bordercolor="white">Assessment</th>
                        <td width="80%">온열찜질기 실행</td>
                    </tr>
                    <tr>
                        <th className="text-center" bgcolor="lightgrey" bordercolor="white">Plan</th>
                        <td width="80%">다음 내원시 Lab test</td>
                    </tr>
        
                </table>
            </div>
                <div className="TreatmentHistoryRead_2">

                <div className="TreatmentCreateForm_2_title">
                    검사 기록 상세
                </div>
                <table className="table table-bordered TreatmentHistoryRead_2_table">
                    <thead className="TreatmentHistoryRead_2_table_thead">
                        <tr>
                            <th>진단검사명</th>
                            <th>검사 날짜</th>
                            <th>검사자</th>
                            <th>검사명</th>
                            <th>참고치</th>
                            <th>검사 결과</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>   
                            <td>혈액검사</td>
                            <td>2021-06-01</td>
                            <td>김검사</td>
                            <td>백혈구 백분율</td>
                            <td>4000~10000μL</td>
                            <td>8000</td>
                        </tr>
                        <tr>   
                            <td></td>
                            <td>2021-06-01</td>
                            <td>김검사</td>
                            <td>순환기능검사-적혈구량측</td>
                            <td>3000~7500/mm3</td>
                            <td>6000</td>
                        </tr>
                        <tr>   
                            <td></td>
                            <td>2021-06-01</td>
                            <td>김검사</td>
                            <td>헤마토크리트</td>
                            <td>12.0~16.0g/dL</td>
                            <td>14</td>
                        </tr>
                        <tr>   
                            <td></td>
                            <td>2021-06-01</td>
                            <td>김검사</td>
                            <td>EKG 심전도검사</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>   
                            <td>유리검사</td>
                            <td>2021-06-01</td>
                            <td>나꼼꼼</td>
                            <td>Urine 7종</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>   
                            <td>영상촬영</td>
                            <td>2021-06-01</td>
                            <td>박사능</td>
                            <td>X-Ray 흉부</td>
                            <td></td>
                            <td> <button className="button_team2_empty">보기</button></td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div> 
    </div>
    );
}
export default TreatmentHistoryRead;
