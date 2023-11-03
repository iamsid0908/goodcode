const responseHandler = (_req: any, res: any, next: any) => {
  res.forbidden = ({ msg }) =>
    res.status(403).json({ ok: false, err: msg || 'Forbidden Request', data: null });

  res.failure = ({ status = 400, msg }) =>
    res
      .status(status)
      .json({ ok: false, err: msg || "Something is wrong! We're looking into it.", data: null });

  res.unauthorized = ({ msg }) =>
    res.status(401).json({ ok: false, err: msg || 'Authentication Failed', data: null });

  res.success = ({ data = {} }) => res.status(200).json({ ok: true, err: null, data });

  next();
};

export { responseHandler };
