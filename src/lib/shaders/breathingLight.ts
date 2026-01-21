export const breathingLightVertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const breathingLightFragmentShader = `
  uniform float time;
  uniform vec3 color;
  varying vec2 vUv;
  void main() {
    float breath = 0.5 + 0.5 * sin(time * 0.05);
    gl_FragColor = vec4(color * breath, breath * 0.3);
  }
`;
