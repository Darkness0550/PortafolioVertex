let audioCtx;

function getContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

export const playHoverSound = () => {
  try {
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.1);
  } catch (e) {
    // Ignore audio errors if context is blocked
  }
};

export const playTickSound = () => {
  try {
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'square';
    osc.frequency.setValueAtTime(150, ctx.currentTime);

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.005);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.05);
  } catch (e) {
    // Ignore audio errors
  }
};

export const playDingSound = () => {
  try {
    const ctx = getContext();
    const osc = ctx.createOscillator();
    const gainNode = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.5);

    gainNode.gain.setValueAtTime(0, ctx.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.05, ctx.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 0.5);
  } catch (e) {
    // Ignore audio errors
  }
};

export const playStartupSound = () => {
  try {
    const ctx = getContext();
    const duration = 1.2;
    const now = ctx.currentTime;

    // Main mechanical sweeping tone
    const osc1 = ctx.createOscillator();
    osc1.type = 'sawtooth';
    osc1.frequency.setValueAtTime(400, now);
    osc1.frequency.exponentialRampToValueAtTime(40, now + duration);

    // Stutter/Modulator for mechanical feel
    const modulator = ctx.createOscillator();
    modulator.type = 'square';
    modulator.frequency.setValueAtTime(20, now);
    modulator.frequency.linearRampToValueAtTime(5, now + duration); // Slowing down stutter
    
    const modGain = ctx.createGain();
    modGain.gain.value = 0; // The base is 0, modulated by the oscillator
    
    // Create an offset for the modulation so it doesn't go negative
    const constantSource = ctx.createConstantSource();
    constantSource.offset.value = 1;
    constantSource.start(now);
    constantSource.stop(now + duration);
    
    // Connect modulator to the gain's AudioParam
    modulator.connect(modGain.gain); 

    // Sub bass
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(150, now);
    subOsc.frequency.exponentialRampToValueAtTime(20, now + duration);

    // Master gain for this effect
    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0, now);
    masterGain.gain.linearRampToValueAtTime(0.15, now + 0.1); // Quick fade in, volume controlled to avoid clipping
    masterGain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc1.connect(modGain);
    modGain.connect(masterGain);
    subOsc.connect(masterGain);
    masterGain.connect(ctx.destination);

    osc1.start(now);
    modulator.start(now);
    subOsc.start(now);
    
    osc1.stop(now + duration);
    modulator.stop(now + duration);
    subOsc.stop(now + duration);
  } catch (e) {
    // Ignore if blocked
  }
};
