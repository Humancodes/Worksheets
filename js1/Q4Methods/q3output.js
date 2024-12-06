const obj = {
  value: 42,
  regular() {
    return this.value;
  },
  arrow: () => this.value,
};
