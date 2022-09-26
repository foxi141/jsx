import * as S from "./styles";
import { useResult } from "./service";
export const Result = ({values,sum,setSum,daysInCurrentYear})=>{
    const {
        firstValue,
        secondValue,
        thirdValue,
        selectedDateScope,
        firstRate,
        secondRate,
        thirdRate,
      } = useResult({
        values,
        sum,
        setSum,
        daysInCurrentYear,
      });
      return (
        <>
          {sum > 0 ? (
            <S.Wrapper>
              <S.Title>Wyniki obliczeń: </S.Title>
              <S.InnerText>
                <S.Text>
                  Liczba dni korzystania z zezwolenia w bieżącym roku:
                </S.Text>
                <S.Value>{selectedDateScope}</S.Value>
              </S.InnerText>
              {values.isNew === 10 ? (
                <>
                  <S.InnerText>
                    <S.Text {...{ isBold: true }}>
                      Nowa opłata do wniesienia w dniu wydania zezwolenia dla:
                    </S.Text>
                    <S.Value {...{ isBold: true }}>
                      {sum.toFixed(2).replace(".", ",")}
                    </S.Value>
                  </S.InnerText>
    
                  {values?.isPermitToSellAlcoholCategoryA && (
                    <S.InnerText>
                      <S.Text>kategorii A:</S.Text>
                      <S.Value>{firstValue.toFixed(2).replace(".", ",")}</S.Value>
                    </S.InnerText>
                  )}
                  {values?.isPermitToSellAlcoholCategoryB && (
                    <S.InnerText>
                      <S.Text>kategorii B:</S.Text>
                      <S.Value>{secondValue.toFixed(2).replace(".", ",")}</S.Value>
                    </S.InnerText>
                  )}
                  {values?.isPermitToSellAlcoholCategoryC && (
                    <S.InnerText>
                      <S.Text>kategorii C:</S.Text>
                      <S.Value>{thirdValue.toFixed(2).replace(".", ",")}</S.Value>
                    </S.InnerText>
                  )}
                </>
              ) : (
                <>
                  <S.InnerText>
                    <S.Text {...{ isBold: true }}>
                      Opłata za kontynuacje zezwolenia dla:
                    </S.Text>
                    <S.Value {...{ isBold: true }}>
                      {Math.round(sum * 100) / 100}
                    </S.Value>
                  </S.InnerText>
                  {values?.isPermitToSellAlcoholCategoryA && (
                    <S.InnerText>
                      <S.Text>Kategorii A:</S.Text>
                      <S.Value>{firstValue.toFixed(2).replace(".", ",")}</S.Value>
                    </S.InnerText>
                  )}
                  {values?.isPermitToSellAlcoholCategoryB && (
                    <S.InnerText>
                      <S.Text>Kategorii B:</S.Text>
                      <S.Value>{secondValue.toFixed(2).replace(".", ",")}</S.Value>
                    </S.InnerText>
                  )}
                  {values?.isPermitToSellAlcoholCategoryC && (
                    <S.InnerText>
                      <S.Text>Kategorii C:</S.Text>
                      <S.Value>{thirdValue.toFixed(2).replace(".", ",")}</S.Value>
                    </S.InnerText>
                  )}
                  {daysInCurrentYear === selectedDateScope ? (
                    <>
                      <S.InnerText>
                        <S.Text
                          {...{ isBold: true }}
                          style={{ paddingLeft: "30px" }}
                        >
                          W podziale na raty:
                        </S.Text>
                      </S.InnerText>
                      {firstRate > 0 ? (
                        <S.InnerText style={{ paddingLeft: "30px" }}>
                          <S.Text>Rata płatna do 31 stycznia:</S.Text>
                          <S.Value>
                            {(
                              sum -
                              Math.floor(secondRate * 100) / 100 -
                              Math.floor(thirdRate * 100) / 100
                            )
                              .toFixed(2)
                              .replace(".", ",")}
                          </S.Value>
                        </S.InnerText>
                      ) : null}
                      {secondRate > 0 ? (
                        <S.InnerText style={{ paddingLeft: "30px" }}>
                          <S.Text>Rata płatna do 31 maja:</S.Text>
                          <S.Value>
                            {(Math.floor(secondRate * 100) / 100)
                              .toFixed(2)
                              .replace(".", ",")}
                          </S.Value>
                        </S.InnerText>
                      ) : null}
                      {thirdRate > 0 ? (
                        <S.InnerText style={{ paddingLeft: "30px" }}>
                          <S.Text>Rata płatna do 30 września: </S.Text>
                          <S.Value>
                            {(Math.floor(thirdRate * 100) / 100)
                              .toFixed(2)
                              .replace(".", ",")}
                          </S.Value>
                        </S.InnerText>
                      ) : null}
    
                      <S.InfoText style={{ paddingLeft: "30px" }}>
                        Opłatę możesz wnieść także w całości w terminie do 31
                        stycznia.
                      </S.InfoText>
                    </>
                  ) : null}
                </>
              )}
            </S.Wrapper>
          ) : null}
        </>
      );
    };
    