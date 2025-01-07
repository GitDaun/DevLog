const SvgMock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props}>
    <text x="0" y="15" fill="black">Mocked SVG</text>
  </svg>
);

export default SvgMock;