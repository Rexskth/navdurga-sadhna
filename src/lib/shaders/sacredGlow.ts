export const sacredGlowVertexShader = `
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    vUv = uv;
    vPosition = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const sacredGlowFragmentShader = `
  uniform float time;
  uniform float glowIntensity;
  varying vec2 vUv;
  varying vec3 vPosition;
  void main() {
    float dist = length(vUv - 0.5);
    float glow = 0.3 * glowIntensity * (1.0 - dist) * (0.8 + 0.2 * sin(time * 0.1));
    gl_FragColor = vec4(1.0, 0.8, 0.6, glow); // Restrained warm
  }
`;
