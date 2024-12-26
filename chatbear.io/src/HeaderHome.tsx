import { Col, Layout, Radio, Row, Space } from 'antd';
import type { CheckboxRef, RadioChangeEvent } from 'antd';
import {
  LegacyRef,
  MutableRefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
import { motion } from 'motion/react';

const { Header } = Layout;

export const HeaderHome = () => {
  const [aboutMePosition, setAboutMePosition] = useState<{
    x: number;
    y: number;
  }>();
  const [postPosition, setPostPosition] = useState<{
    x: number;
    y: number;
  }>();
  const [resumePosition, setResumePosition] = useState<{
    x: number;
    y: number;
  }>();
  const [headerValue, setHeaderValue] = useState<
    'about me' | 'post' | 'resume'
  >('about me');

  const radioRefAboutMe = useRef<CheckboxRef>(null);
  const radioRefPost = useRef<CheckboxRef>(null);
  const radioRefResume = useRef<CheckboxRef>(null);
  const onChangeHeaderValue = (e: RadioChangeEvent) => {
    setHeaderValue(e.target.value);
  };

  useEffect(() => {
    if (radioRefAboutMe.current) {
      const rectAboutMe =
        radioRefAboutMe.current?.nativeElement?.getBoundingClientRect();
      setAboutMePosition({
        x: rectAboutMe?.x as number,
        y: rectAboutMe?.y as number,
      });
    }
    if (radioRefPost.current) {
      const rectPost =
        radioRefPost.current?.nativeElement?.getBoundingClientRect();
      setAboutMePosition({
        x: rectPost?.x as number,
        y: rectPost?.y as number,
      });
    }
    if (radioRefAboutMe.current) {
      const rectResume =
        radioRefResume.current?.nativeElement?.getBoundingClientRect();
      setAboutMePosition({
        x: rectResume?.x as number,
        y: rectResume?.y as number,
      });
    }
  }, []);

  return (
    <Header
      style={{
        backgroundColor: 'black',
        width: '100%',
        padding: 0,
      }}
    >
      <div className="header">
        <motion.div
          animate={{
            x:
              headerValue === 'about me'
                ? aboutMePosition?.x
                : headerValue === 'post'
                  ? postPosition?.x
                  : 0,
          }} // Adjust x based on selected value
          transition={{ type: 'spring', stiffness: 100 }} // Add transition for smooth animation
          style={{
            position: 'absolute',
            width: '100px',
            height: '100%',
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '100px',
          }} // Style for the animated background
        />
        <Radio.Group
          onChange={onChangeHeaderValue}
          optionType="button"
          buttonStyle="solid"
          value={headerValue}
          style={{ width: '100%' }}
        >
          <Row justify="center">
            <Col span={8}>
              <Space direction="vertical" align="end" style={{ width: '100%' }}>
                <Radio
                  ref={radioRefAboutMe}
                  className="header radio-button"
                  value={'about me'}
                  style={{ borderRadius: 100 }}
                >
                  About me
                </Radio>
              </Space>
            </Col>
            <Col span={3}>
              <Space
                direction="vertical"
                align="center"
                style={{ width: '100%' }}
              >
                <Radio
                  ref={radioRefPost}
                  className="header radio-button"
                  value={'post'}
                  style={{ borderRadius: 100 }}
                >
                  Post
                </Radio>
              </Space>
            </Col>
            <Col span={8}>
              <Space
                direction="vertical"
                align="start"
                style={{ width: '100%' }}
              >
                <Radio
                  ref={radioRefResume}
                  className="header radio-button"
                  value={'resume'}
                  style={{ borderRadius: 100 }}
                >
                  Resume
                </Radio>
              </Space>
            </Col>
          </Row>
        </Radio.Group>
      </div>
    </Header>
  );
};
