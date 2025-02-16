import React from 'react';

type MotionComponentProps = {
  children?: React.ReactNode;
  [key: string]: any;
};

// data- 접두사를 붙이지 않을 속성들
const PRESERVED_PROPS = ['aria-label', 'className', 'role', 'id', 'style'];

// 동적 프로퍼티 접근을 위한 Proxy 패턴 사용
// framer-motion 모킹시 props 앞에 data- 를 붙이기 위해 사용
export const motion = new Proxy(
  {},
  {
    get: (_, tag: string) => {
      return function MotionComponent({ children, ...props }: MotionComponentProps) {
        const Tag = tag as keyof React.JSX.IntrinsicElements;
        return (
          <Tag
            data-testid={`motion-${tag}`}
            {...Object.entries(props).reduce((acc, [key, value]) => ({
              ...acc,
              ...(key.startsWith('data-') || PRESERVED_PROPS.includes(key)
                ? { [key]: value }
                : { [`data-${key}`]: JSON.stringify(value) })
            }), {})}
          >
            {children}
          </Tag>
        );
      };
    },
  }
);

export const AnimatePresence = ({ children }: { children: React.ReactNode }) => (
  <div data-testid="animate-presence">{children}</div>
);

export default { motion, AnimatePresence }; 