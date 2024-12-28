import { Layout, Radio, CheckboxRef, RadioChangeEvent, Row, Col } from 'antd';

import { useRef, useState, CSSProperties } from 'react';

const { Header } = Layout;
type HeaderHomeProps = {
  style: CSSProperties;
};
export const HeaderHome = (props: HeaderHomeProps) => {
  const { style } = props;
  const [headerValue, setHeaderValue] = useState<
    'about me' | 'post' | 'resume'
  >('about me');

  const radioRefAboutMe = useRef<CheckboxRef>(null);
  const radioRefPost = useRef<CheckboxRef>(null);
  const radioRefResume = useRef<CheckboxRef>(null);
  const onChangeHeaderValue = (e: RadioChangeEvent) => {
    setHeaderValue(e.target.value);
  };

  return (
    <Header
      style={{
        ...style,
        backgroundColor: 'black',
        padding: 0,
      }}
    >
      <div className="header-radio">
        <Radio.Group
          onChange={onChangeHeaderValue}
          optionType="button"
          buttonStyle="solid"
          value={headerValue}
          style={{ width: '100%' }}
        >
          <Row justify="space-between" align="middle" gutter={80}>
            <Col span={8}>
              <strong
                style={{
                  marginLeft: '10%',
                  fontSize: window.innerWidth < 600 ? '2vw' : '1vw',
                  display: 'grid',
                  alignItems: 'center',
                }}
              >
                S. Adamaly
              </strong>
            </Col>
            <Col>
              <div className="radio-style">
                <Radio
                  ref={radioRefAboutMe}
                  className="header-radio radio-button"
                  value={'about me'}
                  style={{
                    borderRadius: 100,
                    textAlign: 'center',
                  }}
                >
                  <strong
                    style={{
                      fontSize: window.innerWidth < 600 ? '2vw' : '1vw',
                      display: 'grid',
                      alignItems: 'center',
                    }}
                  >
                    About me
                  </strong>
                </Radio>

                <Radio
                  ref={radioRefPost}
                  className="header-radio radio-button"
                  value={'post'}
                  style={{
                    borderRadius: 100,
                    textAlign: 'center',
                  }}
                >
                  <strong
                    style={{
                      fontSize: window.innerWidth < 600 ? '2vw' : '1vw',
                      display: 'grid',
                      alignItems: 'center',
                    }}
                  >
                    Projects
                  </strong>
                </Radio>

                <Radio
                  ref={radioRefResume}
                  className="header-radio radio-button"
                  value={'resume'}
                  style={{
                    borderRadius: 100,
                    // borderWidth: '2px',
                    textAlign: 'center',
                  }}
                >
                  <strong
                    style={{
                      fontSize: window.innerWidth < 600 ? '2vw' : '1vw',
                      display: 'grid',
                      alignItems: 'center',
                    }}
                  >
                    Resume
                  </strong>
                </Radio>
              </div>
            </Col>
          </Row>
        </Radio.Group>
      </div>
    </Header>
  );
};
