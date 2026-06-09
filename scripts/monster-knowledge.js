const MODULE_ID = "pf1e-monster-knowledge";

const SOCKET_ACTIONS = {
  PLAYER_CALCULATE: "playerCalculate",
  PLAYER_INFO_REQUEST: "playerInfoRequest"
};

const RARITY_MODIFIERS = {
  common: -5,
  normal: 0,
  rare: 5
};

const ABILITY_LABELS = {
  str: "Сила",
  dex: "Ловкость",
  con: "Выносливость",
  int: "Интеллект",
  wis: "Мудрость",
  cha: "Харизма"
};

const SAVE_LABELS = {
  fort: "Стойкость",
  ref: "Реакция",
  will: "Воля"
};

const BASE_INFO_OPTIONS = [
  { key: "hp", label: "ПЗ", cost: 1 },
  { key: "ac", label: "КБ", cost: 1 },
  { key: "touch", label: "КБ касание", cost: 1 },
  { key: "flatFooted", label: "КБ врасплох", cost: 1 },
  { key: "dr", label: "Снижение урона", cost: 1 },
  { key: "damageVulnerability", label: "Уязвимость к урону", cost: 1 },
  { key: "damageImmunity", label: "Невосприимчивость к урону", cost: 1 },
  { key: "energyImmunity", label: "Невосприимчивость к энергии", cost: 1 },
  { key: "sr", label: "Устойчивость к магии", cost: 1 },
  { key: "conditionImmunity", label: "Невосприимчивость к состояниям", cost: 1 },
  { key: "senses", label: "Чувства", cost: 1 },
  { key: "languages", label: "Языки", cost: 1 },
  { key: "fort", label: "Стойкость", cost: 1 },
  { key: "ref", label: "Реакция", cost: 1 },
  { key: "will", label: "Воля", cost: 1 },
  { key: "cmb", label: "ЗБМ", cost: 1 },
  { key: "cmd", label: "МБМ", cost: 1 },
  { key: "feature", label: "Особенности", cost: 1 },
  { key: "other", label: "Другое", cost: 1 }
];

const SKILL_FALLBACK_LABELS = {
  art: "Артистизм", lor: "Предания",
  acr: "Акробатика", apr: "Оценка", blf: "Блеф", clm: "Лазание", crf: "Ремесло", dev: "Вывод устройств",
  dip: "Дипломатия", dis: "Маскировка", esc: "Изворотливость", fly: "Полёт", han: "Обращение с животными",
  hea: "Лечение", int: "Запугивание", kar: "Знание: магия", kdu: "Знание: подземелья", ken: "Знание: инженерное дело",
  kge: "Знание: география", khi: "Знание: история", klo: "Знание: краеведение", kna: "Знание: природа",
  kno: "Знание: высший свет", kpl: "Знание: планы", kre: "Знание: религия", lin: "Лингвистика", per: "Внимание",
  prf: "Выступление", pro: "Профессия", rid: "Верховая езда", sen: "Проницательность", slt: "Ловкость рук",
  spl: "Колдовство", ste: "Скрытность", sur: "Выживание", swm: "Плавание", umd: "Использование магических устройств"
};

const DAMAGE_LABELS = {
  acid: "Кислота",
  bludgeoning: "Дробящее",
  cold: "Холод",
  electricity: "Электричество",
  energy: "Энергия",
  epic: "эпическое",
  evil: "зло",
  fire: "Огонь",
  force: "Силовое",
  good: "добро",
  lawful: "порядок",
  chaotic: "хаос",
  magic: "магия",
  nonlethal: "несмертельный урон",
  piercing: "Колющее",
  precision: "точный урон",
  silver: "серебро",
  slashing: "Режущее",
  sonic: "Звук",
  adamantine: "адамантин",
  coldiron: "холодное железо",
  cold_iron: "холодное железо",
  coldIron: "холодное железо",
  crystal: "кристалл"
};

const ENERGY_DAMAGE_KEYS = new Set(["acid", "cold", "electricity", "fire", "sonic"]);

const CONDITION_LABELS = {
  asleep: "Сон",
  sleep: "Сон",
  sleeping: "Сон",
  bleed: "Кровотечение",
  bleeding: "Кровотечение",
  blind: "Слепота",
  blinded: "Слепота",
  blindness: "Слепота",
  confused: "Замешательство",
  confusion: "Замешательство",
  cowering: "Съёживание",
  dazed: "Дезориентация",
  daze: "Дезориентация",
  dazzled: "Ослепление",
  deaf: "Глухота",
  deafened: "Глухота",
  deafness: "Глухота",
  disease: "Болезнь",
  diseased: "Болезнь",
  energy_drain: "Вытягивание жизни",
  energydrain: "Вытягивание жизни",
  energy_drained: "Вытягивание жизни",
  death_effects: "Эффекты смерти",
  deatheffects: "Эффекты смерти",
  death: "Эффекты смерти",
  exhausted: "Истощение",
  exhaustion: "Истощение",
  fatigued: "Утомление",
  fatigue: "Утомление",
  fear: "Испуг",
  frightened: "Испуг",
  shaken: "Шок",
  shock: "Шок",
  grappled: "Захват",
  nauseated: "Тошнота",
  paralyzed: "Паралич",
  paralysis: "Паралич",
  petrified: "Окаменение",
  petrification: "Окаменение",
  pinned: "Прижатие",
  poison: "Яд",
  poisoned: "Яд",
  prone: "Ничком",
  sickened: "Тошнота",
  staggered: "Растерянность",
  stun: "Ступор",
  stunned: "Ступор",
  unconscious: "Без сознания",
  mind_affecting: "Воздействие на разум",
  mindaffecting: "Воздействие на разум",
  mind_affecting_effects: "Воздействие на разум",
  mindaffectingeffects: "Воздействие на разум",
  mind_effects: "Воздействие на разум",
  mindeffects: "Воздействие на разум"
};

const LANGUAGE_LABELS = {
  aboleth: "Аболетский",
  abyssal: "Бездны",
  aklo: "Акло",
  aquan: "Акван",
  auran: "Ауран",
  celestial: "Небесный",
  common: "Всеобщий",
  cyclops: "Циклопский",
  darkfolk: "Тёмного народа",
  draconic: "Драконий",
  druidic: "Друидический",
  dwarven: "Дварфийский",
  elven: "Эльфийский",
  giant: "Великаний",
  gnoll: "Гнолльский",
  gnome: "Гномий",
  goblin: "Гоблинский",
  grippli: "Гриппли",
  halfling: "Полуросличий",
  ignan: "Игнан",
  infernal: "Инфернальный",
  necril: "Некрил",
  orc: "Орочий",
  protean: "Протейский",
  shadowtongue: "Теневой язык",
  sylvan: "Сильван",
  terran: "Терран",
  undercommon: "Подземный",
  telepathy: "телепатия"
};

const SENSE_LABELS = {
  blindsense: "Виброчувствительность",
  blindsight: "Слепозрение",
  darkvision: "Ночное зрение",
  darkVision: "Ночное зрение",
  lowLight: "Сумеречное зрение",
  lowlight: "Сумеречное зрение",
  low_light: "Сумеречное зрение",
  lowLightVision: "Сумеречное зрение",
  low_light_vision: "Сумеречное зрение",
  scent: "Нюх",
  seeInDarkness: "Видение во тьме",
  see_in_darkness: "Видение во тьме",
  seeInvisibility: "Видение невидимого",
  see_invisibility: "Видение невидимого",
  seeInvisible: "Видение невидимого",
  tremorsense: "Виброчувствительность",
  truesight: "Истинное зрение",
  trueSeeing: "Истинное зрение",
  true_seeing: "Истинное зрение"
};

const SPEED_LABELS = {
  land: "Наземная скорость",
  base: "Наземная скорость",
  walk: "Наземная скорость",
  fly: "Скорость полёта",
  swim: "Скорость плавания",
  burrow: "Скорость рытья",
  climb: "Скорость лазания",
  custom: "Особая скорость"
};

const SPEED_ALIASES = {
  land: ["land", "base", "walk"],
  fly: ["fly"],
  swim: ["swim"],
  burrow: ["burrow"],
  climb: ["climb"]
};

const SPEED_QUESTION_OPTIONS = [
  { key: "land", label: "Наземная скорость" },
  { key: "climb", label: "Скорость лазания" },
  { key: "swim", label: "Скорость плавания" },
  { key: "burrow", label: "Скорость рытья" },
  { key: "fly", label: "Скорость полёта" }
];

const ALLOWED_KNOWLEDGE_SKILL_KEYS = new Set(["kar", "kdu", "ken", "kge", "khi", "klo", "kna", "kno", "kpl", "kre"]);

const ALLOWED_KNOWLEDGE_ENGLISH = [
  "local", "arcana", "planes", "dungeoneering", "nature", "religion", "nobility", "geography", "engineering", "history"
];

const ALLOWED_KNOWLEDGE_RUSSIAN = [
  "краеведение", "магия", "планы", "подземелья", "природа", "религия", "высший свет", "география", "инженерное дело", "история"
];

Hooks.once("init", () => {
  registerSettings();
});

Hooks.once("ready", () => {
  game.socket.on(`module.${MODULE_ID}`, handleSocketMessage);
  console.log(`${MODULE_ID} | Ready`);
});

Hooks.on("getSceneControlButtons", (controls) => {
  if (!game.user?.isGM) return;
  if (!game.settings.get(MODULE_ID, "enableGMButton")) return;
  const tokenControls = controls.find((c) => c.name === "token");
  if (!tokenControls) return;
  tokenControls.tools.push({
    name: "pf1mk-gm-knowledge",
    title: game.i18n.localize("PF1MK.Button.GM"),
    icon: "fas fa-brain",
    button: true,
    visible: true,
    onClick: () => openGMCalculatorDialog()
  });
});

Hooks.on("renderChatMessage", (message, html) => {
  attachKnowledgeRollButton(message, html);
  attachFeatureViewHandlers(message, html);
  attachSelectionButtonHandlers(message, html);
  attachGMRarityButtonHandlers(message, html);
  attachGMAnswerButtonHandlers(message, html);
});

Hooks.on("createChatMessage", (message) => {
  const type = message?.flags?.[MODULE_ID]?.type;
  if (type !== "info-request") return;
  if (!game.user?.isGM) return;

  const authorId = message?.user?.id ?? message?.user;
  if (authorId === game.user.id) return;

  playGMInfoRequestSound();
});

function registerSettings() {
  game.settings.register(MODULE_ID, "enablePlayerButton", {
    name: game.i18n.localize("PF1MK.Settings.PlayerButton.Name"),
    hint: game.i18n.localize("PF1MK.Settings.PlayerButton.Hint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "enableGMButton", {
    name: game.i18n.localize("PF1MK.Settings.GMButton.Name"),
    hint: game.i18n.localize("PF1MK.Settings.GMButton.Hint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "enableInfoSelection", {
    name: game.i18n.localize("PF1MK.Settings.InfoSelection.Name"),
    hint: game.i18n.localize("PF1MK.Settings.InfoSelection.Hint"),
    scope: "world",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "featureMode", {
    name: game.i18n.localize("PF1MK.Settings.FeatureMode.Name"),
    hint: game.i18n.localize("PF1MK.Settings.FeatureMode.Hint"),
    scope: "world",
    config: true,
    type: String,
    default: "actorNames",
    choices: {
      actorNames: game.i18n.localize("PF1MK.FeatureMode.ActorNames"),
      gmDrop: game.i18n.localize("PF1MK.FeatureMode.GMDrop")
    }
  });

  game.settings.register(MODULE_ID, "defaultRarity", {
    name: game.i18n.localize("PF1MK.Settings.DefaultRarity.Name"),
    hint: game.i18n.localize("PF1MK.Settings.DefaultRarity.Hint"),
    scope: "world",
    config: true,
    type: String,
    default: "normal",
    choices: {
      common: game.i18n.localize("PF1MK.Rarity.Common"),
      normal: game.i18n.localize("PF1MK.Rarity.Normal"),
      rare: game.i18n.localize("PF1MK.Rarity.Rare")
    }
  });

  game.settings.register(MODULE_ID, "enableGMRequestSound", {
    name: game.i18n.localize("PF1MK.Settings.GMRequestSound.Name"),
    hint: game.i18n.localize("PF1MK.Settings.GMRequestSound.Hint"),
    scope: "client",
    config: true,
    type: Boolean,
    default: true
  });

  game.settings.register(MODULE_ID, "gmRequestSoundVolume", {
    name: game.i18n.localize("PF1MK.Settings.GMRequestSoundVolume.Name"),
    hint: game.i18n.localize("PF1MK.Settings.GMRequestSoundVolume.Hint"),
    scope: "client",
    config: true,
    type: Number,
    default: 0.35,
    range: {
      min: 0,
      max: 1,
      step: 0.05
    }
  });
}

function attachKnowledgeRollButton(message, html) {
  if (!game.settings.get(MODULE_ID, "enablePlayerButton")) return;
  if (!isKnowledgeRollMessage(message)) return;
  if (html.find(".pf1mk-roll-button").length) return;

  const rollTotal = getRollTotal(message);
  if (!Number.isFinite(rollTotal)) return;

  const title = game.i18n.localize("PF1MK.Button.Knowledge");
  const button = $(`<button type="button" class="pf1mk-roll-button pf1mk-roll-button-icon" title="${escapeAttr(title)}" aria-label="${escapeAttr(title)}"><i class="fas fa-brain"></i></button>`);
  button.on("click", (event) => {
    event.preventDefault();
    requestCalculationFromChat(message, rollTotal);
  });

  const timestamp = html.find(".message-metadata time, .message-metadata .message-timestamp, .message-timestamp, time").first();
  if (timestamp.length) {
    button.addClass("pf1mk-roll-button-meta");
    timestamp.before(button);
    return;
  }

  const metadata = html.find(".message-metadata").first();
  if (metadata.length) {
    button.addClass("pf1mk-roll-button-meta");
    metadata.prepend(button);
    return;
  }

  const titleRow = html.find(".message-content h4, .message-content .card-header, .message-content .summary, .message-content .dice-flavor, .message-content .roll-flavor").first();
  if (titleRow.length) {
    titleRow.addClass("pf1mk-title-line");
    button.addClass("pf1mk-roll-button-title-right");
    titleRow.append(button);
    return;
  }

  const content = html.find(".message-content").first();
  if (content.length) content.prepend(button);
  else html.prepend(button);
}

function attachSelectionButtonHandlers(_message, html) {
  html.find(".pf1mk-select-questions").each((_idx, element) => {
    const button = $(element);
    const playerId = button.data("playerId");
    if (!game.user.isGM && playerId && playerId !== game.user.id) {
      button.remove();
      return;
    }
    button.on("click", (event) => {
      event.preventDefault();
      openPlayerQuestionSelectionDialog({
        playerId: String(button.data("playerId")),
        questionCount: Number(button.data("questionCount")),
        sceneId: String(button.data("sceneId")),
        tokenId: String(button.data("tokenId")),
        actorId: String(button.data("actorId")),
        tokenName: String(button.data("tokenName") || "цель"),
        askerActorName: String(button.data("askerActorName") || "")
      });
    });
  });
}

function attachGMRarityButtonHandlers(_message, html) {
  html.find(".pf1mk-gm-rarity-calculate").each((_idx, element) => {
    const button = $(element);
    if (!game.user.isGM) {
      button.remove();
      return;
    }
    button.on("click", async (event) => {
      event.preventDefault();
      const wrapper = button.closest(".pf1mk-rarity-request");
      const payload = safeJsonFromBase64(String(button.data("payload")));
      if (!payload) return;
      const rarity = String(wrapper.find("select[name=rarity]").val() || game.settings.get(MODULE_ID, "defaultRarity"));
      const bonusQuestions = Math.max(0, Math.floor(Number(wrapper.find("input[name=bonusQuestions]").val()) || 0));
      const rollBonus = Math.trunc(Number(wrapper.find("input[name=rollBonus]").val()) || 0);
      const baseRoll = Number(payload.baseRollTotal ?? payload.rollTotal) || 0;
      payload.baseRollTotal = baseRoll;
      payload.rollBonus = rollBonus;
      payload.bonusQuestions = bonusQuestions;
      payload.rollTotal = baseRoll + rollBonus;
      await finalizePlayerCalculation(payload, rarity, bonusQuestions);
    });
  });
}

function attachGMAnswerButtonHandlers(_message, html) {
  html.find(".pf1mk-gm-answer").each((_idx, element) => {
    const button = $(element);
    if (!game.user.isGM) {
      button.remove();
      return;
    }
    button.on("click", (event) => {
      event.preventDefault();
      const payload = safeJsonFromBase64(String(button.data("payload")));
      if (payload) openGMAnswerDialog(payload);
    });
  });
}

async function requestCalculationFromChat(message, rollTotal) {
  const targets = Array.from(game.user.targets ?? []);
  if (targets.length !== 1) {
    ui.notifications.warn(game.i18n.localize("PF1MK.Warn.NoTarget"));
    return;
  }

  const target = targets[0];
  const payload = {
    action: SOCKET_ACTIONS.PLAYER_CALCULATE,
    requestId: foundry.utils.randomID(),
    requesterId: game.user.id,
    requesterName: game.user.name,
    askerActorName: getAskerActorName(message, target),
    rollTotal,
    baseRollTotal: rollTotal,
    rollBonus: 0,
    bonusQuestions: 0,
    originalMessageId: message.id,
    target: getTokenReference(target),
    rarity: game.settings.get(MODULE_ID, "defaultRarity")
  };

  openCalculationOptionsDialog(payload);
}

function openCalculationOptionsDialog(payload) {
  const target = getTokenFromReference(payload.target);
  const targetName = target?.name ?? payload.target?.tokenName ?? "цель";
  const selected = payload.rarity ?? game.settings.get(MODULE_ID, "defaultRarity");
  const baseRoll = Number(payload.baseRollTotal ?? payload.rollTotal) || 0;

  const content = `
    <form class="pf1mk-form pf1mk-calc-options-form">
      <p>Цель: <strong>${escapeHtml(targetName)}</strong></p>
      <p>Бросок из чата: <strong>${formatNumber(baseRoll)}</strong></p>
      <div class="form-group">
        <label><strong>Редкость монстра</strong></label>
        <select name="rarity">
          <option value="common" ${selected === "common" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Common"))} — СЛ -5</option>
          <option value="normal" ${selected === "normal" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Normal"))} — без изменения СЛ</option>
          <option value="rare" ${selected === "rare" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Rare"))} — СЛ +5</option>
        </select>
      </div>
      <div class="form-group">
        <label><strong>Дополнительный бонус к броску</strong></label>
        <input type="number" name="rollBonus" value="0" step="1">
        <p class="notes">Если на проверку действует числовой бонус, укажите его здесь. Модуль прибавит его к броску из чата перед расчётом.</p>
      </div>
      <div class="form-group">
        <label><strong>Дополнительные вопросы</strong></label>
        <input type="number" name="bonusQuestions" value="0" min="0" step="1">
        <p class="notes">По умолчанию 0. Используйте это поле, если черта, способность или особое правило даёт дополнительные вопросы сверх расчёта.</p>
      </div>
      <p class="notes">Распространённый монстр легче для опознания; обычный использует СЛ 10 + КО; редкий повышает СЛ.</p>
    </form>`;

  new Dialog({
    title: "Параметры расчёта вопросов",
    content,
    buttons: {
      calculate: {
        label: "Посчитать",
        icon: '<i class="fas fa-calculator"></i>',
        callback: async (html) => {
          const form = html[0].querySelector("form");
          const data = new FormData(form);
          const rollBonus = Math.trunc(Number(data.get("rollBonus")) || 0);
          const bonusQuestions = Math.max(0, Math.floor(Number(data.get("bonusQuestions")) || 0));
          const rarity = String(data.get("rarity") || game.settings.get(MODULE_ID, "defaultRarity"));
          const finalPayload = {
            ...payload,
            rarity,
            rollBonus,
            bonusQuestions,
            baseRollTotal: baseRoll,
            rollTotal: baseRoll + rollBonus
          };

          if (game.user.isGM) {
            await finalizePlayerCalculation(finalPayload, rarity, bonusQuestions);
            return;
          }

          if (!hasActiveGM()) {
            ui.notifications.warn(game.i18n.localize("PF1MK.Warn.NoGM"));
            return false;
          }

          game.socket.emit(`module.${MODULE_ID}`, finalPayload);
        }
      },
      cancel: { label: "Отмена" }
    },
    default: "calculate"
  }, { width: 470, resizable: true }).render(true);
}

async function handleSocketMessage(payload) {
  if (!payload?.action) return;
  if (!game.user?.isGM) return;
  if (!isPrimaryActiveGM()) return;

  if (payload.action === SOCKET_ACTIONS.PLAYER_CALCULATE) {
    await processPlayerCalculation(payload);
  }

  if (payload.action === SOCKET_ACTIONS.PLAYER_INFO_REQUEST) {
    await createGMInfoRequestMessage(payload);
  }
}

async function processPlayerCalculation(payload) {
  await autoApprovePlayerCalculation(payload);
}

async function autoApprovePlayerCalculation(payload) {
  const rarity = payload.rarity ?? game.settings.get(MODULE_ID, "defaultRarity");
  const bonusQuestions = Math.max(0, Math.floor(Number(payload.bonusQuestions) || 0));
  await finalizePlayerCalculation(payload, rarity, bonusQuestions);
}

async function createGMRarityRequestMessage(payload) {
  const token = getTokenFromReference(payload.target);
  const actor = token?.actor ?? game.actors.get(payload.target?.actorId);
  const targetName = token?.name ?? actor?.name ?? payload.target?.tokenName ?? "цель";
  const actorName = payload.askerActorName || payload.requesterName || game.users.get(payload.requesterId)?.name || "Игрок";
  const selected = payload.rarity ?? game.settings.get(MODULE_ID, "defaultRarity");
  const encodedPayload = base64Json(payload);
  const content = `
    <div class="pf1mk-card pf1mk-rarity-request">
      <h3>Запрос знания о монстре</h3>
      <p><strong>${escapeHtml(actorName)}</strong> спрашивает о цели: <strong>${escapeHtml(targetName)}</strong></p>
      <p>Итог броска Знания: <strong>${formatNumber(payload.baseRollTotal ?? payload.rollTotal)}</strong></p>
      <div class="form-group">
        <label><strong>Дополнительный бонус к броску</strong></label>
        <input type="number" name="rollBonus" value="${formatNumber(payload.rollBonus || 0)}" step="1">
        <p class="notes">Если на проверку действует числовой бонус, укажите его здесь. Модуль прибавит его к броску из чата перед расчётом.</p>
      </div>
      <div class="form-group">
        <label><strong>Редкость монстра</strong></label>
        <select name="rarity">
          <option value="common" ${selected === "common" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Common"))} — СЛ -5</option>
          <option value="normal" ${selected === "normal" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Normal"))} — без изменения СЛ</option>
          <option value="rare" ${selected === "rare" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Rare"))} — СЛ +5</option>
        </select>
      </div>
      <div class="form-group">
        <label><strong>Дополнительные вопросы</strong></label>
        <input type="number" name="bonusQuestions" value="0" min="0" step="1">
        <p class="notes">По умолчанию 0. Используйте это поле, если черта, способность или особое правило даёт дополнительные вопросы сверх расчёта.</p>
      </div>
      <p class="notes">Распространённый монстр легче для опознания; обычный использует СЛ 10 + КО; редкий повышает СЛ.</p>
      <button type="button" class="pf1mk-gm-rarity-calculate" data-payload="${escapeAttr(encodedPayload)}">
        <i class="fas fa-calculator"></i> Посчитать вопросы
      </button>
    </div>`;

  await ChatMessage.create(ChatMessage.applyRollMode({
    user: game.user.id,
    speaker: getSpeakerFor(token),
    content,
    flags: { [MODULE_ID]: { type: "rarity-request", payload } }
  }, "gm"));
}

async function finalizePlayerCalculation(payload, rarity, bonusQuestions = 0) {
  const token = getTokenFromReference(payload.target);
  const actor = token?.actor ?? game.actors.get(payload.target?.actorId);
  const cr = getActorCR(actor);
  if (!Number.isFinite(cr)) {
    ui.notifications.warn(game.i18n.localize("PF1MK.Warn.NoCR"));
    await ChatMessage.create({
      user: game.user.id,
      speaker: getSpeakerFor(token),
      content: `<div class="pf1mk-card"><h3>${escapeHtml(game.i18n.localize("PF1MK.Chat.ResultTitle"))}</h3><p>Не удалось найти КО цели для расчёта.</p></div>`,
      whisper: getRequesterAndGMRecipientIds(payload.requesterId),
      blind: false
    });
    return;
  }

  const calc = calculateQuestions(Number(payload.rollTotal), cr, rarity ?? game.settings.get(MODULE_ID, "defaultRarity"), bonusQuestions);
  calc.rollBonus = Math.trunc(Number(payload.rollBonus) || 0);
  calc.baseRollTotal = Number(payload.baseRollTotal ?? payload.rollTotal);
  await createQuestionCountMessage({
    requesterId: payload.requesterId,
    requesterName: payload.requesterName,
    askerActorName: payload.askerActorName,
    token,
    actor,
    rollTotal: Number(payload.rollTotal),
    calc,
    fromPlayer: true
  });
}

async function createQuestionCountMessage({ requesterId, requesterName, askerActorName = "", token, actor, rollTotal, calc, fromPlayer = false, rollMode = "public" }) {
  const targetName = token?.name ?? actor?.name ?? "цель";
  const selectionEnabled = game.settings.get(MODULE_ID, "enableInfoSelection");
  const targetRef = getTokenReference(token, actor);
  const canSelect = selectionEnabled && calc.questions > 0 && requesterId;
  const selectButton = canSelect ? `
    <button type="button" class="pf1mk-select-questions"
      data-player-id="${escapeAttr(requesterId)}"
      data-question-count="${calc.questions}"
      data-scene-id="${escapeAttr(targetRef.sceneId)}"
      data-token-id="${escapeAttr(targetRef.tokenId)}"
      data-actor-id="${escapeAttr(targetRef.actorId)}"
      data-token-name="${escapeAttr(targetName)}"
      data-asker-actor-name="${escapeAttr(askerActorName)}">
      <i class="fas fa-list-check"></i> ${escapeHtml(game.i18n.localize("PF1MK.Chat.SelectQuestions"))}
    </button>` : "";

  const content = `
    <div class="pf1mk-card">
      <h3>${escapeHtml(game.i18n.localize("PF1MK.Chat.ResultTitle"))}</h3>
      <p><strong>${escapeHtml(askerActorName || requesterName || game.users.get(requesterId)?.name || "Персонаж")}</strong> изучает: <strong>${escapeHtml(targetName)}</strong></p>
      <p>Итог броска Знания: <strong>${formatNumber(rollTotal)}</strong></p>
      ${calc.rollBonus ? `<p>Дополнительный бонус к броску: <strong>${formatSigned(calc.rollBonus)}</strong></p>` : ""}
      ${calc.bonusQuestions ? `<p>Дополнительные вопросы: <strong>+${formatNumber(calc.bonusQuestions)}</strong></p>` : ""}
      <p>${escapeHtml(game.i18n.localize("PF1MK.Chat.Questions"))}: <strong class="pf1mk-big-number">${calc.questions}</strong></p>
      ${selectButton}
    </div>`;

  let chatData = {
    user: game.user.id,
    speaker: getSpeakerFor(token),
    content,
    flags: {
      [MODULE_ID]: {
        type: "question-count",
        requesterId,
        target: targetRef,
        questionCount: calc.questions,
        rollTotal
      }
    }
  };

  if (fromPlayer) {
    chatData.whisper = getRequesterAndGMRecipientIds(requesterId);
    chatData.blind = false;
  } else if (rollMode === "player") {
    const recipients = [...new Set([...getActorOwnerIds(actor), ...ChatMessage.getWhisperRecipients("GM").map((user) => user.id)])];
    chatData.whisper = recipients.length ? recipients : ChatMessage.getWhisperRecipients("GM").map((user) => user.id);
    chatData.blind = false;
  } else {
    chatData = ChatMessage.applyRollMode(chatData, rollMode);
  }

  await ChatMessage.create(chatData);
}

function openGMCalculatorDialog() {
  const tokens = canvas?.tokens?.controlled ?? [];
  if (!tokens.length) {
    ui.notifications.warn(game.i18n.localize("PF1MK.Warn.GMNoControlled"));
    return;
  }

  const targetOptions = tokens.map((token, index) => `<option value="${index}">${escapeHtml(token.name)}</option>`).join("");
  const rarity = game.settings.get(MODULE_ID, "defaultRarity");

  const content = `
    <form class="pf1mk-form">
      <div class="form-group">
        <label>Цель</label>
        <select name="targetIndex">${targetOptions}</select>
      </div>
      <div class="form-group">
        <label>Итог броска Знания</label>
        <input type="number" name="rollTotal" value="10" step="1" autofocus />
      </div>
      <div class="form-group">
        <label>Дополнительный бонус к броску</label>
        <input type="number" name="rollBonus" value="0" step="1">
        <p class="notes">Если на проверку действует числовой бонус, укажите его здесь.</p>
      </div>
      <div class="form-group">
        <label>Редкость</label>
        <select name="rarity">
          <option value="common" ${rarity === "common" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Common"))}</option>
          <option value="normal" ${rarity === "normal" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Normal"))}</option>
          <option value="rare" ${rarity === "rare" ? "selected" : ""}>${escapeHtml(game.i18n.localize("PF1MK.Rarity.Rare"))}</option>
        </select>
      </div>
      <div class="form-group">
        <label>Дополнительные вопросы</label>
        <input type="number" name="bonusQuestions" value="0" min="0" step="1">
        <p class="notes">Если способность или особое правило даёт дополнительные вопросы, укажите их здесь.</p>
      </div>
      <div class="form-group">
        <label>Показать сообщение</label>
        <select name="rollMode">
          <option value="public">Публично</option>
          <option value="player">Только игроку и ГМ</option>
        </select>
      </div>
    </form>`;

  new Dialog({
    title: "Знание о монстре: расчёт вопросов",
    content,
    buttons: {
      calculate: {
        label: "Посчитать",
        icon: '<i class="fas fa-calculator"></i>',
        callback: async (html) => {
          const form = html[0].querySelector("form");
          const data = new FormData(form);
          const token = tokens[Number(data.get("targetIndex"))];
          const baseRollTotal = Number(data.get("rollTotal"));
          const rollBonus = Math.trunc(Number(data.get("rollBonus")) || 0);
          const rollTotal = baseRollTotal + rollBonus;
          const rarityValue = String(data.get("rarity"));
          const rollMode = String(data.get("rollMode"));
          const bonusQuestions = Math.max(0, Math.floor(Number(data.get("bonusQuestions")) || 0));
          const cr = getActorCR(token?.actor);
          if (!Number.isFinite(cr)) {
            ui.notifications.warn(game.i18n.localize("PF1MK.Warn.NoCR"));
            return;
          }
          const calc = calculateQuestions(rollTotal, cr, rarityValue, bonusQuestions);
          calc.rollBonus = rollBonus;
          calc.baseRollTotal = baseRollTotal;
          await createQuestionCountMessage({
            requesterId: game.user.id,
            requesterName: game.user.name,
            token,
            actor: token.actor,
            rollTotal,
            calc,
            fromPlayer: false,
            rollMode
          });
        }
      },
      cancel: { label: "Отмена" }
    },
    default: "calculate"
  }, { width: 460, resizable: true }).render(true);
}


function buildGroupedInfoOptionsHTML() {
  const byKey = new Map(BASE_INFO_OPTIONS.filter((option) => !["other", "feature"].includes(option.key)).map((option) => [option.key, option]));
  const groups = [
    ["hp"],
    ["ac", "touch", "flatFooted"],
    ["dr", "damageVulnerability", "damageImmunity", "energyImmunity", "sr", "conditionImmunity"],
    ["senses", "languages"],
    ["fort", "ref", "will"],
    ["cmb", "cmd"]
  ];
  return groups.map((keys) => {
    const options = keys.map((key) => byKey.get(key)).filter(Boolean)
      .map((option) => `<label><input type="checkbox" name="info" value="${option.key}" data-cost="${option.cost}"> ${escapeHtml(option.label)}</label>`)
      .join("");
    return `<div class="pf1mk-option-group"><div class="pf1mk-checkbox-grid">${options}</div></div>`;
  }).join("");
}

function openPlayerQuestionSelectionDialog({ playerId, questionCount, sceneId, tokenId, actorId, tokenName, askerActorName = "" }) {
  if (!game.user.isGM && playerId !== game.user.id) {
    ui.notifications.warn("Этот выбор принадлежит другому игроку.");
    return;
  }

  const actor = getActorFromReference({ sceneId, tokenId, actorId });

  const abilityOptions = Object.entries(ABILITY_LABELS)
    .map(([key, label]) => `<label><input type="checkbox" name="ability" value="${key}" data-cost="1"> ${escapeHtml(label)}</label>`)
    .join("");

  const baseOptions = buildGroupedInfoOptionsHTML();

  const speedOptions = getSpeedQuestionChoices(actor)
    .map((option) => `<label><input type="checkbox" name="speed" value="${escapeAttr(option.key)}" data-label="${escapeAttr(option.label)}" data-cost="1"> ${escapeHtml(option.label)}</label>`)
    .join("");

  const skillOptions = getSkillChoicesForDialog(actor)
    .map((entry) => `<label><input type="checkbox" name="skill" value="${escapeAttr(entry.key)}" data-label="${escapeAttr(entry.label)}" data-cost="1"> ${escapeHtml(entry.label)}</label>`)
    .join("");

  const content = `
    <form class="pf1mk-form pf1mk-selection-form">
      <p>Цель: <strong>${escapeHtml(tokenName)}</strong></p>
      <p>Доступно вопросов: <strong class="pf1mk-remaining">${questionCount}</strong> / ${questionCount}</p>
      <fieldset>
        <legend>Основное</legend>
        <div class="pf1mk-option-groups">${baseOptions}</div>
      </fieldset>
      <fieldset>
        <legend>Характеристики</legend>
        <div class="pf1mk-checkbox-grid">${abilityOptions}</div>
      </fieldset>
      <fieldset>
        <legend>Скорость</legend>
        <div class="pf1mk-checkbox-grid">${speedOptions}</div>
        <p class="notes">Каждая отдельная скорость стоит 1 вопрос.</p>
      </fieldset>
      <fieldset>
        <legend>Особенности</legend>
        <label class="pf1mk-number-line">
          <span>Сколько вопросов потратить на особенности</span>
          <input type="number" name="featureCount" value="0" min="0" max="${questionCount}" step="1">
        </label>
        <p class="notes">ГМ сможет выбрать не больше указанного числа особенностей. Каждая особенность стоит 1 вопрос.</p>
      </fieldset>
      <fieldset>
        <legend>Навыки</legend>
        <div class="pf1mk-checkbox-grid pf1mk-scroll-grid">${skillOptions}</div>
        <p class="notes">Каждый отдельный навык стоит 1 вопрос.</p>
      </fieldset>
      <fieldset>
        <legend>Другое</legend>
        <label><input type="checkbox" name="info" value="other" data-cost="1"> Необычный вопрос к ГМ</label>
        <textarea name="otherQuestion" rows="3" placeholder="Например: что у него самое опасное? Есть ли уязвимость?"></textarea>
      </fieldset>
    </form>`;

  const dialog = new Dialog({
    title: "Выбор вопросов о монстре",
    content,
    buttons: {
      send: {
        label: "Готово",
        icon: '<i class="fas fa-paper-plane"></i>',
        callback: async (html) => {
          const form = html[0].querySelector("form");
          const selections = collectQuestionSelections(form);
          const totalCost = selections.reduce((sum, selection) => sum + (selection.cost ?? 1), 0);
          if (totalCost < 1) {
            ui.notifications.warn("Выберите хотя бы один вопрос.");
            return false;
          }
          if (totalCost > questionCount) {
            ui.notifications.warn(`Вы выбрали вопросов на ${totalCost}, а доступно ${questionCount}.`);
            return false;
          }
          const payload = {
            action: SOCKET_ACTIONS.PLAYER_INFO_REQUEST,
            requesterId: playerId,
            requesterName: game.users.get(playerId)?.name ?? game.user.name,
            askerActorName,
            target: { sceneId, tokenId, actorId },
            tokenName,
            questionCount,
            selections,
            createdAt: Date.now()
          };
          if (game.user.isGM) {
            await createGMInfoRequestMessage(payload);
          } else {
            if (!hasActiveGM()) {
              ui.notifications.warn(game.i18n.localize("PF1MK.Warn.NoGM"));
              return false;
            }
            game.socket.emit(`module.${MODULE_ID}`, payload);
          }
          ui.notifications.info("Вопросы отправлены ГМ-у.");
        }
      },
      cancel: { label: "Отмена" }
    },
    default: "send",
    render: (html) => {
      const root = html[0];
      const featureInput = root.querySelector("input[name=featureCount]");
      const updateRemaining = () => {
        const form = root.querySelector("form");
        if (featureInput) {
          const checkedCostWithoutFeature = Array.from(form.querySelectorAll("input[type=checkbox]:checked"))
            .reduce((sum, input) => sum + (Number(input.dataset.cost) || 1), 0);
          const allowedFeatureMax = Math.max(0, questionCount - checkedCostWithoutFeature);
          featureInput.max = String(allowedFeatureMax);
          let current = Math.floor(Number(featureInput.value) || 0);
          current = Math.max(0, Math.min(current, allowedFeatureMax));
          featureInput.value = String(current);
        }
        const selections = collectQuestionSelections(form);
        const used = selections.reduce((sum, selection) => sum + (selection.cost ?? 1), 0);
        const remaining = Math.max(0, questionCount - used);
        const remainingElement = root.querySelector(".pf1mk-remaining");
        if (remainingElement) {
          remainingElement.textContent = String(remaining);
          remainingElement.classList.toggle("over", used > questionCount);
        }
        root.querySelectorAll("input[type=checkbox]").forEach((checkbox) => {
          if (checkbox.checked) {
            checkbox.disabled = false;
            return;
          }
          const cost = Number(checkbox.dataset.cost) || 1;
          checkbox.disabled = used + cost > questionCount;
        });
      };
      root.querySelectorAll("input[type=checkbox]").forEach((checkbox) => checkbox.addEventListener("change", updateRemaining));
      if (featureInput) featureInput.addEventListener("input", updateRemaining);
      updateRemaining();
    }
  }, { width: 500, resizable: true });

  dialog.render(true);
}

function collectQuestionSelections(form) {
  const selections = [];
  if (!form) return selections;

  form.querySelectorAll("input[type=checkbox]:checked").forEach((input) => {
    if (input.name === "ability") {
      selections.push({ type: "ability", key: input.value, label: ABILITY_LABELS[input.value] ?? input.value, cost: 1 });
      return;
    }

    if (input.name === "speed") {
      const label = input.dataset.label || speedLabel(input.value);
      selections.push({ type: "speed", key: input.value, label, cost: 1 });
      return;
    }

    if (input.name === "skill") {
      const label = input.dataset.label || getSkillLabel(input.value, null);
      selections.push({ type: "skill", key: input.value, label, cost: 1 });
      return;
    }

    if (input.value === "other") {
      const question = String(form.querySelector("textarea[name=otherQuestion]")?.value ?? "").trim();
      selections.push({ type: "other", key: "other", label: question ? `Другое: ${question}` : "Другое", question, cost: 1 });
      return;
    }

    const option = BASE_INFO_OPTIONS.find((item) => item.key === input.value);
    selections.push({ type: "stat", key: input.value, label: option?.label ?? input.value, cost: Number(input.dataset.cost) || 1 });
  });

  const featureInput = form.querySelector("input[name=featureCount]");
  if (featureInput) {
    const count = Math.max(0, Math.floor(Number(featureInput.value) || 0));
    if (count > 0) selections.push({ type: "stat", key: "feature", label: `Особенности (${count})`, cost: count, featureCount: count });
  }

  return selections;
}

async function createGMInfoRequestMessage(payload) {
  const encodedPayload = base64Json(payload);
  const selectedList = payload.selections
    .map((selection) => `<li>${escapeHtml(selection.label)}</li>`)
    .join("");
  const asker = payload.askerActorName || payload.requesterName || "Игрок";

  const content = `
    <div class="pf1mk-card">
      <h3>${escapeHtml(game.i18n.localize("PF1MK.Chat.AnswerRequest"))}</h3>
      <p><strong>${escapeHtml(asker)}</strong> спрашивает о цели: <strong>${escapeHtml(payload.tokenName ?? "цель")}</strong></p>
      <ul>${selectedList}</ul>
      <button type="button" class="pf1mk-gm-answer" data-payload="${escapeAttr(encodedPayload)}">
        <i class="fas fa-reply"></i> Ответить
      </button>
    </div>`;

  await ChatMessage.create({
    user: game.user.id,
    speaker: getSpeakerFor(null),
    content,
    whisper: getRequesterAndGMRecipientIds(payload.requesterId),
    blind: false,
    flags: { [MODULE_ID]: { type: "info-request", payload } }
  });

  await playGMInfoRequestSound();
}

function openGMAnswerDialog(payload) {
  const token = getTokenFromReference(payload.target);
  const actor = token?.actor ?? game.actors.get(payload.target?.actorId);
  if (!actor) {
    ui.notifications.warn("Не удалось найти актёра цели.");
    return;
  }

  const generated = generateAnswers(actor, payload.selections);
  const features = getFeatureItems(actor);
  const featureMode = game.settings.get(MODULE_ID, "featureMode");
  const featureSelection = payload.selections.find((selection) => selection.key === "feature");
  const featureLimit = Math.max(0, Number(featureSelection?.featureCount ?? featureSelection?.cost ?? 0));
  const featureBlock = featureSelection
    ? buildFeatureControlHTML(features, featureMode, featureLimit)
    : "";

  const content = `
    <form class="pf1mk-form pf1mk-answer-form">
      <p>Игрок: <strong>${escapeHtml(payload.requesterName ?? "Игрок")}</strong></p>
      <p>Цель: <strong>${escapeHtml(token?.name ?? actor.name)}</strong></p>
      <div class="form-group">
        <label>Показать ответ</label>
        <select name="rollMode">
          <option value="public">Публично</option>
          <option value="player">Только игроку и ГМ</option>
        </select>
      </div>
      ${featureBlock}
      <div class="form-group stacked">
        <label>Текст ответа</label>
        <textarea name="answer" rows="10">${escapeHtml(generated)}</textarea>
      </div>
      <p class="notes">Текст можно отредактировать перед отправкой. Для «Другое» модуль оставляет место под ручной ответ.</p>
    </form>`;

  new Dialog({
    title: "Ответить на вопросы о монстре",
    content,
    buttons: {
      send: {
        label: "Отправить",
        icon: '<i class="fas fa-paper-plane"></i>',
        callback: async (html) => {
          const form = html[0].querySelector("form");
          const rollMode = String(new FormData(form).get("rollMode"));
          const answer = String(new FormData(form).get("answer") ?? "").trim();
          const featureAnswer = collectFeatureAnswer(form, actor);
          const answerHtml = answerTextToHtml(answer, {
            FEATURES: featureAnswer.html || `<div class="pf1mk-answer-row">${escapeHtml(featureAnswer.text || "ГМ не выбрала конкретную особенность.")}</div>`
          });
          await postGMAnswer({ payload, token, actor, answerHtml, rollMode });
        }
      },
      cancel: { label: "Отмена" }
    },
    default: "send",
    render: (html) => {
      const form = html[0].querySelector("form");
      const updateFeatureLimit = () => {
        const limit = Number(form?.querySelector("[data-feature-limit]")?.dataset.featureLimit ?? 0);
        if (!limit) return;
        const checked = Array.from(form.querySelectorAll("input[name=featureItem]:checked"));
        form.querySelectorAll("input[name=featureItem]").forEach((checkbox) => {
          checkbox.disabled = !checkbox.checked && checked.length >= limit;
        });
      };
      const applyFeatureSearchFilter = () => {
        const query = normalizeSearchText(form?.querySelector("input[name=featureSearch]")?.value || "");
        form?.querySelectorAll(".pf1mk-feature-option").forEach((row) => {
          const name = normalizeSearchText(row.dataset.featureSearch || row.dataset.featureName || "");
          const visible = !query || name.includes(query);
          row.hidden = !visible;
          row.classList.toggle("pf1mk-filter-hidden", !visible);
          row.style.display = visible ? "" : "none";
        });
        form?.querySelectorAll(".pf1mk-feature-group").forEach((group) => {
          const visibleRows = Array.from(group.querySelectorAll(".pf1mk-feature-option")).some((row) => !row.hidden);
          group.hidden = !visibleRows;
          group.classList.toggle("pf1mk-filter-hidden", !visibleRows);
          group.style.display = visibleRows ? "" : "none";
        });
      };
      form?.querySelectorAll("input[name=featureItem]").forEach((checkbox) => checkbox.addEventListener("change", updateFeatureLimit));
      form?.querySelector("input[name=featureSearch]")?.addEventListener("input", applyFeatureSearchFilter);
      updateFeatureLimit();
      applyFeatureSearchFilter();
      form?.addEventListener("click", async (event) => {
        const featureLink = event.target.closest?.(".pf1mk-open-feature");
        if (!featureLink) return;
        event.preventDefault();
        event.stopPropagation();
        const item = await getItemFromFeatureLink(featureLink, actor);
        if (item?.sheet?.render) item.sheet.render(true);
      });
      const drop = form?.querySelector(".pf1mk-drop-zone");
      if (drop) {
        renderDroppedFeatureList(form);
        drop.addEventListener("dragover", (event) => event.preventDefault());
        drop.addEventListener("drop", async (event) => {
          event.preventDefault();
          try {
            const data = TextEditor.getDragEventData(event);
            const item = await Item.implementation.fromDropData(data);
            if (!item) return;
            if (isInventoryItem(item) || isExcludedFeatureItem(item)) {
              ui.notifications.warn("Можно вкладывать только предметы-особенности, не предметы инвентаря.");
              return;
            }
            const limit = Number(form.querySelector("[data-feature-limit]")?.dataset.featureLimit ?? 0);
            const entries = parseDroppedFeatureEntries(form);
            if (limit && entries.length >= limit) {
              ui.notifications.warn(`Можно вложить не больше ${limit} предметов-особенностей.`);
              return;
            }
            const entry = featureEntryFromItem(item);
            if (entry.uuid && entries.some((existing) => existing.uuid === entry.uuid)) return;
            entries.push(entry);
            writeDroppedFeatureEntries(form, entries);
            renderDroppedFeatureList(form);
          } catch (err) {
            console.warn(`${MODULE_ID} | Drop failed`, err);
          }
        });
        form.addEventListener("click", (event) => {
          const removeButton = event.target.closest?.(".pf1mk-remove-dropped-feature");
          if (!removeButton) return;
          event.preventDefault();
          const row = removeButton.closest(".pf1mk-dropped-feature");
          const index = Number(row?.dataset.index);
          const entries = parseDroppedFeatureEntries(form);
          if (Number.isFinite(index)) entries.splice(index, 1);
          writeDroppedFeatureEntries(form, entries);
          renderDroppedFeatureList(form);
        });
      }
    }
  }, { width: 560, resizable: true }).render(true);
}

function buildFeatureControlHTML(features, featureMode, featureLimit = 1) {
  const limit = Number(featureLimit) || 1;
  if (featureMode === "actorNames") {
    const groups = groupFeatureItemsBySheetBlock(features);
    const options = groups.length
      ? groups.map((group) => `
        <div class="pf1mk-feature-group" data-feature-group>
          <div class="pf1mk-feature-group-title">${escapeHtml(group.label)}</div>
          <div class="pf1mk-feature-group-list">
            ${group.items.map((item) => {
              const searchName = normalizeSearchText(item.name || "");
              return `
                <div class="pf1mk-feature-option" data-feature-name="${escapeAttr(searchName)}" data-feature-search="${escapeAttr(searchName)}">
                  <label class="pf1mk-feature-check" title="Выбрать особенность">
                    <input type="checkbox" name="featureItem" value="${escapeAttr(item.id)}">
                  </label>
                  <img class="pf1mk-option-icon" src="${escapeAttr(item.img || "icons/svg/book.svg")}" alt="">
                  <a class="content-link pf1mk-open-feature" data-type="Item" data-uuid="${escapeAttr(item.uuid || "")}" data-item-id="${escapeAttr(item.id)}" data-id="${escapeAttr(item.id)}"><i class="fas fa-suitcase"></i> ${escapeHtml(item.name)}</a>
                </div>`;
            }).join("")}
          </div>
        </div>`).join("")
      : `<p class="notes">У актёра не найдено подходящих предметов-особенностей.</p>`;
    return `
      <fieldset data-feature-limit="${limit}">
        <legend>Особенности актёра</legend>
        <div class="form-group pf1mk-feature-search-line">
          <label>Поиск по названию</label>
          <input type="text" name="featureSearch" class="pf1mk-feature-search" placeholder="Введите часть названия особенности">
        </div>
        <div class="pf1mk-feature-selector pf1mk-scroll-grid">${options}</div>
        <p class="notes">Можно выбрать до ${limit}. Выбранные предметы будут выведены в чат отдельными строками, с иконками.</p>
      </fieldset>`;
  }

  return `
    <fieldset data-feature-limit="${limit}">
      <legend>Особенности вручную</legend>
      <input type="hidden" name="featureDropped" value="[]">
      <div class="pf1mk-drop-zone">Перетащите сюда предмет-особенность</div>
      <div class="pf1mk-dropped-feature-list"></div>
      <p class="notes">Игрок потратил вопросов на особенности: ${limit}. Каждый вложенный предмет занимает 1 вопрос. В чат отправляется только ссылка на предмет, без текста описания.</p>
    </fieldset>`;
}

async function getItemFromFeatureLink(link, actor = null) {
  const uuid = link?.dataset?.uuid;
  const document = await resolveDocumentUuid(uuid);
  if (document) return document;

  const id = link?.dataset?.itemId || link?.dataset?.id;
  if (!id) return null;
  return actor?.items?.get(id) ?? game.items?.get(id) ?? null;
}

async function resolveDocumentUuid(uuid) {
  if (!uuid) return null;
  try {
    if (typeof fromUuid === "function") return await fromUuid(uuid);
    if (typeof fromUUID === "function") return await fromUUID(uuid);
    if (foundry?.utils?.fromUuid) return await foundry.utils.fromUuid(uuid);
  } catch (err) {
    console.warn(`${MODULE_ID} | Could not resolve UUID`, uuid, err);
  }
  return null;
}

function attachFeatureViewHandlers(_message, html) {
  html.find(".pf1mk-view-feature").each((_idx, element) => {
    const link = $(element);
    link.on("click", async (event) => {
      event.preventDefault();
      event.stopPropagation();
      const payload = safeJsonFromBase64(String(link.data("feature") || ""));
      if (!payload) return;
      await openSharedFeatureDialog(payload);
    });
  });
}

async function openSharedFeatureDialog(entry) {
  const name = entry?.name || "Особенность";
  const img = entry?.img || "icons/svg/book.svg";
  const rawDescription = exposeHiddenFeatureHtml(String(entry?.description || ""));
  const enriched = rawDescription && globalThis.TextEditor?.enrichHTML
    ? await globalThis.TextEditor.enrichHTML(rawDescription, { async: true, secrets: true })
    : rawDescription;
  const visibleDescription = exposeHiddenFeatureHtml(enriched || rawDescription);
  const content = `
    <div class="pf1mk-feature-viewer">
      <div class="pf1mk-feature-viewer-header">
        <img src="${escapeAttr(img)}" alt="">
        <h3>${escapeHtml(name)}</h3>
      </div>
      <div class="pf1mk-feature-viewer-body">${visibleDescription || "<p>Описание особенности отсутствует.</p>"}</div>
    </div>`;
  new Dialog({
    title: name,
    content,
    buttons: { close: { label: "Закрыть" } },
    default: "close"
  }, { width: 520, resizable: true }).render(true);
}

function collectFeatureAnswer(form, actor) {
  const empty = { text: "", html: "" };
  if (!form) return empty;
  const featureMode = game.settings.get(MODULE_ID, "featureMode");
  if (featureMode === "actorNames") {
    const ids = Array.from(form.querySelectorAll("input[name=featureItem]:checked")).map((input) => input.value);
    if (!ids.length) return empty;
    const items = ids.map((id) => actor.items.get(id)).filter(Boolean);
    return {
      text: items.map((item) => item.name).join("\n"),
      html: formatFeatureItemsHtml(items)
    };
  }

  const entries = parseDroppedFeatureEntries(form);
  return {
    text: entries.map((entry) => entry.name).join("\n"),
    html: formatFeatureEntriesHtml(entries)
  };
}

function parseDroppedFeatureEntries(form) {
  const raw = form?.querySelector("input[name=featureDropped]")?.value ?? "[]";
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((entry) => entry?.name) : [];
  } catch (_err) {
    return [];
  }
}

function writeDroppedFeatureEntries(form, entries) {
  const input = form?.querySelector("input[name=featureDropped]");
  if (input) input.value = JSON.stringify(entries ?? []);
}

function featureEntryFromItem(item) {
  return {
    id: item?.id ?? foundry.utils.randomID(),
    uuid: item?.uuid ?? "",
    name: item?.name ?? "Предмет",
    img: item?.img ?? "icons/svg/book.svg",
    type: item?.type ?? "Item",
    description: getItemDescriptionHtml(item)
  };
}

function renderDroppedFeatureList(form) {
  const container = form?.querySelector(".pf1mk-dropped-feature-list");
  if (!container) return;
  const limit = Number(form.querySelector("[data-feature-limit]")?.dataset.featureLimit ?? 0);
  const entries = parseDroppedFeatureEntries(form);
  container.innerHTML = entries.length
    ? entries.map((entry, index) => `
      <div class="pf1mk-dropped-feature" data-index="${index}">
        <img class="pf1mk-option-icon" src="${escapeAttr(entry.img || "icons/svg/book.svg")}" alt="">
        <a class="content-link pf1mk-open-feature" data-type="Item" data-uuid="${escapeAttr(entry.uuid || "")}" data-item-id="${escapeAttr(entry.id || "")}" data-id="${escapeAttr(entry.id || "")}"><i class="fas fa-suitcase"></i> ${escapeHtml(entry.name)}</a>
        <button type="button" class="pf1mk-remove-dropped-feature" title="Убрать"><i class="fas fa-times"></i></button>
      </div>`).join("")
    : `<p class="notes">Пока не вложено ни одного предмета.</p>`;
  const drop = form.querySelector(".pf1mk-drop-zone");
  if (drop) drop.classList.toggle("disabled", Boolean(limit && entries.length >= limit));
}

async function postGMAnswer({ payload, token, actor, answerHtml, rollMode }) {
  const content = `
    <div class="pf1mk-card pf1mk-answer-card">
      <h3 class="pf1mk-answer-title">${escapeHtml(game.i18n.localize("PF1MK.Chat.Answer"))}</h3>
      <p class="pf1mk-answer-target"><strong>${escapeHtml(token?.name ?? actor.name)}</strong></p>
      ${answerHtml || "<p>—</p>"}
    </div>`;

  let chatData = {
    user: game.user.id,
    speaker: getSpeakerFor(token),
    content,
    flags: { [MODULE_ID]: { type: "answer", payload } }
  };

  if (rollMode === "player") {
    chatData.whisper = [payload.requesterId, ...ChatMessage.getWhisperRecipients("GM").map((u) => u.id)];
    chatData.blind = false;
  } else {
    chatData = ChatMessage.applyRollMode(chatData, rollMode);
  }

  await ChatMessage.create(chatData);
}

function generateAnswers(actor, selections) {
  const lines = [];
  for (const selection of selections ?? []) {
    if (selection.type === "ability") {
      lines.push(`- ${selection.label}: ${getAbilityValue(actor, selection.key)}`);
      continue;
    }
    if (selection.type === "speed") {
      lines.push(`- Скорость: ${getSpecificSpeedAnswer(actor, selection.key)}`);
      continue;
    }
    if (selection.key === "feature") {
      lines.push(`- Особенности:`);
      lines.push(`{{FEATURES}}`);
      continue;
    }
    if (selection.type === "skill" || selection.key === "skill") {
      lines.push(`- Навык: ${getSkillAnswer(actor, selection.key ?? selection.query)}`);
      continue;
    }
    if (selection.key === "other") {
      lines.push(`- Другое: ${selection.question ? selection.question + " — " : ""}[впишите ответ ГМ]`);
      continue;
    }
    lines.push(`- ${selection.label}: ${getStatAnswer(actor, selection.key)}`);
  }
  return lines.join("\n");
}

function getStatAnswer(actor, key) {
  const getters = {
    hp: () => formatHP(actor),
    ac: () => valueFromPaths(actor, ["system.attributes.ac.normal.total", "system.attributes.ac.normal.value", "system.attributes.ac.normal", "system.attributes.ac.value", "system.attributes.ac.total"]),
    touch: () => valueFromPaths(actor, ["system.attributes.ac.touch.total", "system.attributes.ac.touch.value", "system.attributes.ac.touch"]),
    flatFooted: () => valueFromPaths(actor, ["system.attributes.ac.flatFooted.total", "system.attributes.ac.flatFooted.value", "system.attributes.ac.flatFooted", "system.attributes.ac.flatfooted.total"]),
    dr: () => formatDamageReduction(actor),
    damageVulnerability: () => formatTraitFromPaths(actor, ["system.traits.dv", "system.traits.damageVulnerabilities", "system.traits.vulnerabilities.damage", "system.traits.vulnerabilities"], "damage"),
    damageImmunity: () => formatTraitFromPaths(actor, ["system.traits.di", "system.traits.damageImmunities", "system.traits.damageImmunity", "system.traits.immune.damage", "system.traits.immunities.damage"], "damage"),
    energyImmunity: () => formatEnergyImmunity(actor),
    sr: () => valueFromPaths(actor, ["system.attributes.sr.total", "system.attributes.sr.value", "system.attributes.sr", "system.traits.sr.total", "system.traits.sr"], "—"),
    conditionImmunity: () => formatTraitFromPaths(actor, ["system.traits.ci", "system.traits.conditionImmunities", "system.traits.conditionImmunity", "system.traits.immunities.condition"], "condition"),
    senses: () => formatSenses(actor),
    languages: () => formatLanguages(actor),
    fort: () => getSaveValue(actor, "fort"),
    ref: () => getSaveValue(actor, "ref"),
    will: () => getSaveValue(actor, "will"),
    cmb: () => valueFromPaths(actor, ["system.attributes.cmb.total", "system.attributes.cmb.value", "system.attributes.cmb"], "—"),
    cmd: () => valueFromPaths(actor, ["system.attributes.cmd.total", "system.attributes.cmd.value", "system.attributes.cmd"], "—")
  };
  const value = getters[key]?.();
  return formatValue(value);
}

function getAbilityValue(actor, abilityKey) {
  const value = valueFromPaths(actor, [
    `system.abilities.${abilityKey}.total`,
    `system.abilities.${abilityKey}.value`,
    `system.abilities.${abilityKey}.score`
  ], "—");
  const mod = valueFromPaths(actor, [
    `system.abilities.${abilityKey}.mod`,
    `system.abilities.${abilityKey}.modifier`
  ], null);
  if (mod === null || mod === undefined || mod === "—") return formatValue(value);
  return `${formatValue(value)} (${Number(mod) >= 0 ? "+" : ""}${formatValue(mod)})`;
}

function getSaveValue(actor, saveKey) {
  const paths = [
    `system.attributes.savingThrows.${saveKey}.total`,
    `system.attributes.savingThrows.${saveKey}.value`,
    `system.attributes.savingThrows.${saveKey}`,
    `system.saves.${saveKey}.total`,
    `system.saves.${saveKey}.value`,
    `system.saves.${saveKey}.mod`
  ];
  return formatValue(valueFromPaths(actor, paths, "—"));
}

function getSkillAnswer(actor, query) {
  const entries = getSkillEntries(actor);
  if (!entries.length) return "навыки не найдены";
  if (!query) return entries.map((entry) => `${entry.label} ${formatSigned(entry.value)}`).join("\n");
  const lowered = String(query).toLocaleLowerCase();
  const found = entries.find((entry) =>
    entry.key.toLocaleLowerCase() === lowered ||
    entry.id.toLocaleLowerCase() === lowered ||
    entry.label.toLocaleLowerCase().includes(lowered)
  );
  return found ? `${found.label} ${formatSigned(found.value)}` : `навык «${query}» не найден`;
}

function getSkillChoicesForDialog(actor) {
  const entries = getSkillEntries(actor);
  const source = entries.length
    ? entries
    : Object.entries(SKILL_FALLBACK_LABELS).map(([key, label]) => ({ key, id: key, label, value: 0 }));
  return source
    .map((entry) => ({ key: entry.key, label: entry.label }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

function getSkillEntries(actor) {
  const skills = actor?.system?.skills ?? {};
  const entries = [];

  for (const [key, data] of Object.entries(skills)) {
    const label = getSkillLabel(key, data);
    if (data?.subSkills && typeof data.subSkills === "object") {
      for (const [subKey, subData] of Object.entries(data.subSkills)) {
        const subLabelRaw = subData?.label ?? subData?.name ?? subKey;
        const subLabel = `${label}: ${localizeIfKey(subLabelRaw)}`;
        entries.push({ key: `${key}.${subKey}`, id: `${key}.${subKey}`, label: subLabel, value: getSkillValue(subData) });
      }
    }
    entries.push({ key, id: key, label, value: getSkillValue(data) });
  }

  const seen = new Set();
  return entries
    .filter((entry) => {
      const id = String(entry.key || entry.label);
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    })
    .sort((a, b) => a.label.localeCompare(b.label));
}

function getSkillLabel(key, data) {
  if (key === "art" || key === "lor") return SKILL_FALLBACK_LABELS[key];
  const label = data?.label ?? data?.name ?? data?.subSkills?.name;
  return String(localizeIfKey(label || SKILL_FALLBACK_LABELS[key] || key));
}

function getSkillValue(data) {
  return Number(data?.mod ?? data?.total ?? data?.value ?? data?.rank ?? data?.ranks ?? 0);
}

function formatHP(actor) {
  const value = valueFromPaths(actor, ["system.attributes.hp.value", "system.attributes.hp.current"], null);
  const max = valueFromPaths(actor, ["system.attributes.hp.max", "system.attributes.hp.total"], null);
  if (value !== null && max !== null) return `${formatValue(value)} / ${formatValue(max)}`;
  return formatValue(max ?? value ?? "—");
}

function formatSpeed(actor) {
  const entries = getSpeedEntries(actor, { includeZero: false });
  return entries.length ? entries.map((entry) => `${entry.label} ${formatDistanceValue(entry.value)}`).join("; ") : "—";
}

function getSpecificSpeedAnswer(actor, speedKey) {
  const entries = getSpeedEntries(actor, { includeZero: true });
  const aliases = SPEED_ALIASES[speedKey] ?? [speedKey];
  const found = entries.find((entry) => aliases.includes(entry.key));
  const label = speedChoiceLabel(speedKey);
  if (!found || isEmptySpeed(found.value)) return `${label}: не найдена`;
  return `${label}: ${formatDistanceValue(found.value)}`;
}

function getSpeedQuestionChoices(actor) {
  const entries = getSpeedEntries(actor, { includeZero: false });
  const hasCustom = entries.some((entry) => entry.key === "custom");
  return hasCustom ? [...SPEED_QUESTION_OPTIONS, { key: "custom", label: "Особая скорость" }] : SPEED_QUESTION_OPTIONS;
}

function getSpeedEntries(actor, { includeZero = false } = {}) {
  const speed = valueFromPaths(actor, ["system.attributes.speed", "system.traits.speed"], null);
  const entries = [];

  if (speed && typeof speed === "object" && !Array.isArray(speed)) {
    for (const [key, data] of Object.entries(speed)) {
      if (["units", "unit", "custom", "special"].includes(key)) continue;
      const value = extractNumericalOrTextValue(data);
      if (!includeZero && isEmptySpeed(value)) continue;
      entries.push({ key, label: speedLabel(key), value });
    }
    const custom = speed.custom ?? speed.special;
    if (custom) entries.push({ key: "custom", label: "особая скорость", value: custom });
  } else if (speed !== null && speed !== undefined && speed !== "") {
    entries.push({ key: "land", label: speedLabel("land"), value: speed });
  }

  const order = ["land", "base", "walk", "fly", "swim", "burrow", "climb", "custom"];
  return entries.sort((a, b) => (order.indexOf(a.key) === -1 ? 99 : order.indexOf(a.key)) - (order.indexOf(b.key) === -1 ? 99 : order.indexOf(b.key)));
}

function isEmptySpeed(value) {
  if (value === null || value === undefined || value === "") return true;
  const numeric = Number(value);
  return Number.isFinite(numeric) && numeric <= 0;
}

function extractNumericalOrTextValue(data) {
  if (data && typeof data === "object") {
    let zeroFallback = undefined;
    for (const value of [data.total, data.value, data.base, data.normal, data.speed]) {
      if (value === undefined || value === null || value === "") continue;
      const numeric = Number(value);
      if (Number.isFinite(numeric) && numeric === 0) {
        zeroFallback = value;
        continue;
      }
      return value;
    }
    if (zeroFallback !== undefined) return zeroFallback;
    if (data.enabled === true || data.value === true) return true;
    return "";
  }
  return data;
}

function speedChoiceLabel(key) {
  const base = ({ land: "Наземная скорость", base: "Наземная скорость", walk: "Наземная скорость", fly: "Скорость полёта", swim: "Скорость плавания", burrow: "Скорость рытья", climb: "Скорость лазания", custom: "Особая скорость" })[key];
  return base ?? String(key);
}

function speedLabel(key) {
  return SPEED_LABELS[key] ?? key;
}

function getFeatureItems(actor) {
  return Array.from(actor?.items ?? [])
    .filter((item) => !isInventoryItem(item))
    .filter((item) => !isExcludedFeatureItem(item))
    .sort((a, b) => a.name.localeCompare(b.name));
}

function groupFeatureItemsBySheetBlock(items) {
  const grouped = new Map();
  for (const item of items ?? []) {
    const label = getFeatureSheetBlockLabel(item);
    if (!grouped.has(label)) grouped.set(label, []);
    grouped.get(label).push(item);
  }

  const preferredOrder = [
    "Классовые особенности",
    "Классовые способности",
    "Особенности народа",
    "Штрихи народа",
    "Народ",
    "Особые атаки",
    "Особые качества",
    "Экстраординарные способности",
    "Сверхъестественные способности",
    "Псевдозаклинания",
    "Заклинания",
    "Способности",
    "Разное"
  ];

  return Array.from(grouped, ([label, groupItems]) => ({
    label,
    items: groupItems.sort((a, b) => a.name.localeCompare(b.name))
  })).sort((a, b) => {
    const ai = preferredOrder.indexOf(a.label);
    const bi = preferredOrder.indexOf(b.label);
    if (ai !== -1 || bi !== -1) return (ai === -1 ? 999 : ai) - (bi === -1 ? 999 : bi);
    return a.label.localeCompare(b.label);
  });
}

function getFeatureSheetBlockLabel(item) {
  const directValues = [
    foundry.utils.getProperty(item, "system.sheetBlock"),
    foundry.utils.getProperty(item, "system.block"),
    foundry.utils.getProperty(item, "system.group"),
    foundry.utils.getProperty(item, "system.section"),
    foundry.utils.getProperty(item, "system.category"),
    foundry.utils.getProperty(item, "system.subType"),
    foundry.utils.getProperty(item, "system.abilityType"),
    foundry.utils.getProperty(item, "system.ability.type"),
    foundry.utils.getProperty(item, "system.specialType"),
    foundry.utils.getProperty(item, "flags.pf1.sheetBlock"),
    foundry.utils.getProperty(item, "flags.pf1.block"),
    foundry.utils.getProperty(item, "flags.pf1.group"),
    foundry.utils.getProperty(item, "flags.pf1.category")
  ];

  for (const value of directValues) {
    const label = featureBlockLabelFromValue(value);
    if (label) return label;
  }

  const typeLabel = featureBlockLabelFromValue(item?.type);
  return typeLabel || "Разное";
}

function featureBlockLabelFromValue(value) {
  if (value === null || value === undefined || value === "") return "";

  if (Array.isArray(value)) {
    for (const part of value) {
      const label = featureBlockLabelFromValue(part);
      if (label) return label;
    }
    return "";
  }

  if (typeof value === "object") {
    for (const key of ["label", "name", "title", "value", "type", "category", "subType", "id"]) {
      const label = featureBlockLabelFromValue(value[key]);
      if (label) return label;
    }
    return "";
  }

  const raw = String(value).trim();
  if (!raw) return "";
  if (/[А-Яа-яЁё]/.test(raw) && raw.length <= 40) return capitalizeFirst(raw);

  const normalized = normalizeToken(raw);
  const compact = normalized.replace(/_/g, "");
  const labels = {
    weaponattacks: "Атаки оружием",
    weaponattack: "Атаки оружием",
    meleeattacks: "Атаки оружием",
    meleeattack: "Атаки оружием",
    naturalattacks: "Естественные атаки",
    naturalattack: "Естественные атаки",
    natural: "Естественные атаки",
    classfeatures: "Классовые особенности",
    classfeature: "Классовые особенности",
    classfeats: "Классовые особенности",
    classfeat: "Классовые особенности",
    classabilities: "Классовые способности",
    classability: "Классовые способности",
    class: "Классовые особенности",
    classes: "Классовые особенности",
    racialfeatures: "Особенности народа",
    racialfeature: "Особенности народа",
    racialtraits: "Штрихи народа",
    racialtrait: "Штрихи народа",
    racial: "Штрихи народа",
    race: "Народ",
    nation: "Народ",
    ancestry: "Народ",
    spell: "Заклинания",
    spells: "Заклинания",
    spellbook: "Заклинания",
    spellcasting: "Заклинания",
    spelltemporary: "Временный",
    temporary: "Временный",
    temp: "Временный",
    spellpermanent: "Постоянный",
    permanent: "Постоянный",
    perm: "Постоянный",
    spellitem: "Предмет",
    item: "Предмет",
    items: "Предметы",
    specialattacks: "Особые атаки",
    specialattack: "Особые атаки",
    spattack: "Особые атаки",
    attack: "Особые атаки",
    attacks: "Особые атаки",
    sa: "Особые атаки",
    offensive: "Особые атаки",
    offense: "Особые атаки",
    specialqualities: "Особые качества",
    specialquality: "Особые качества",
    quality: "Особые качества",
    qualities: "Особые качества",
    sq: "Особые качества",
    defensive: "Особые качества",
    defense: "Особые качества",
    extraordinary: "Экстраординарные способности",
    ex: "Экстраординарные способности",
    supernatural: "Сверхъестественные способности",
    su: "Сверхъестественные способности",
    spelllike: "Псевдозаклинания",
    spelllikeability: "Псевдозаклинания",
    spelllikeabilities: "Псевдозаклинания",
    sp: "Псевдозаклинания",
    abilities: "Способности",
    ability: "Способности",
    feat: "Черты",
    feats: "Черты",
    trait: "Штрихи",
    traits: "Штрихи",
    template: "Шаблоны",
    templates: "Шаблоны",
    buff: "Бонусы",
    buffs: "Бонусы",
    effect: "Эффекты",
    effects: "Эффекты",
    condition: "Состояния",
    conditions: "Состояния",
    feature: "Способности",
    features: "Способности",
    misc: "Разное",
    miscellaneous: "Разное",
    other: "Разное",
    default: "Разное"
  };
  return labels[compact] || labels[normalized] || capitalizeFirst(raw.replace(/[._-]+/g, " "));
}

function isInventoryItem(item) {
  const type = normalizeToken(item?.type ?? "");
  const inventoryTypes = new Set([
    "weapon", "weapons", "armor", "armour", "shield", "equipment", "equip", "gear", "loot",
    "treasure", "consumable", "consumables", "container", "backpack", "goods", "physical", "item",
    "ammunition", "ammo", "wand", "scroll", "potion", "service", "tradegood", "tradegoods"
  ]);
  if (inventoryTypes.has(type)) return true;

  const system = item?.system ?? {};
  const inventoryMarkers = [
    system.quantity,
    system.qty,
    system.price,
    system.weight,
    system.carried,
    system.equipped,
    system.equipmentType,
    system.inventoryType,
    system.slot,
    system.containerId
  ];
  if (inventoryMarkers.some((value) => value !== undefined && value !== null && value !== "")) return true;

  const subtypeText = [system.subType, system.type, system.category]
    .filter((value) => value !== undefined && value !== null)
    .map((value) => typeof value === "object" ? JSON.stringify(value) : String(value))
    .join(" ")
    .toLocaleLowerCase();

  return /\b(weapon|weapons|armor|armour|shield|equipment|gear|loot|treasure|consumable|container|inventory|инвентарь|оружие|броня|щит|снаряжение)\b/.test(subtypeText);
}

function isExcludedFeatureItem(item) {
  const type = normalizeToken(item?.type ?? "");
  // В PF1e многие реальные способности монстра тоже могут иметь item.type = "feat",
  // поэтому сам тип feat не отсекаем: убираем только явные блоки черт/штрихов/шаблонов по подтипу.
  if (["trait", "traits", "template", "templates"].includes(type)) return true;

  const candidates = [
    item?.system?.featType,
    item?.system?.subType,
    item?.system?.type,
    item?.system?.category,
    item?.system?.tags,
    item?.system?.associations?.type
  ];

  const text = candidates
    .flatMap((value) => Array.isArray(value) ? value : [value])
    .filter((value) => value !== undefined && value !== null)
    .map((value) => typeof value === "object" ? JSON.stringify(value) : String(value))
    .join(" ")
    .toLocaleLowerCase();

  return /\b(feat|feats|trait|traits|template|templates)\b|черта|черты|штрих|штрихи|шаблон|шаблоны/.test(text);
}


function getItemDescriptionHtml(item) {
  const description = item?.system?.description ?? item?.description ?? "";
  const parts = [];
  const add = (value) => {
    if (value === undefined || value === null || value === "") return;
    const text = String(value);
    if (!text.trim()) return;
    if (!parts.includes(text)) parts.push(text);
  };

  if (description && typeof description === "object") {
    for (const key of ["value", "short", "long", "identified", "unidentified", "public", "private", "gm", "gmNotes", "gmnotes", "gmNote", "notes", "chat", "text"]) {
      add(description[key]);
    }
  } else {
    add(description);
  }

  add(item?.system?.shortDescription);
  add(item?.system?.effectNotes);
  add(item?.system?.details);
  add(item?.system?.gmNotes);
  add(item?.system?.gmnotes);

  return exposeHiddenFeatureHtml(parts.join("\n"));
}

function exposeHiddenFeatureHtml(html) {
  const raw = String(html ?? "");
  if (!raw) return "";
  if (typeof document === "undefined") {
    return raw
      .replace(/\bsecret\b/g, "")
      .replace(/\bgm-only\b|\bgmOnly\b|\bgm-note\b|\bgmnotes\b/g, "")
      .replace(/\s+(hidden|data-secret|data-visibility)(="[^"]*")?/gi, "")
      .replace(/display\s*:\s*none\s*!?important?\s*;?/gi, "")
      .replace(/display\s*:\s*none\s*;?/gi, "")
      .replace(/visibility\s*:\s*hidden\s*!?important?\s*;?/gi, "")
      .replace(/visibility\s*:\s*hidden\s*;?/gi, "")
      .replace(/opacity\s*:\s*0\s*!?important?\s*;?/gi, "")
      .replace(/opacity\s*:\s*0\s*;?/gi, "");
  }

  const wrapper = document.createElement("div");
  wrapper.innerHTML = raw;
  const revealSelector = [
    ".secret",
    ".gm-only",
    ".gmOnly",
    ".gm-note",
    ".gmnotes",
    "[data-visibility]",
    "[data-secret]",
    "[hidden]",
    "section.secret",
    "div.secret"
  ].join(", ");
  wrapper.querySelectorAll(revealSelector).forEach((element) => {
    element.classList.remove("secret", "gm-only", "gmOnly", "gm-note", "gmnotes");
    element.removeAttribute("hidden");
    element.removeAttribute("data-visibility");
    element.removeAttribute("data-secret");
    if (element.style) {
      element.style.setProperty("display", "block", "important");
      element.style.setProperty("visibility", "visible", "important");
      element.style.setProperty("opacity", "1", "important");
    }
  });
  wrapper.querySelectorAll("*").forEach((element) => {
    if (!element.style) return;
    const styleText = element.getAttribute("style") || "";
    if (/display\s*:\s*none/i.test(styleText)) element.style.setProperty("display", "block", "important");
    if (/visibility\s*:\s*hidden/i.test(styleText)) element.style.setProperty("visibility", "visible", "important");
    if (/opacity\s*:\s*0/i.test(styleText)) element.style.setProperty("opacity", "1", "important");
  });
  return wrapper.innerHTML;
}

function extractItemSummary(item) {
  const raw = item?.system?.description?.value ?? item?.system?.description ?? item?.description ?? "";
  const text = stripHtml(String(raw)).trim();
  if (!text) return "";
  return ` — ${text.slice(0, 300)}${text.length > 300 ? "…" : ""}`;
}

function calculateQuestions(rollTotal, cr, rarity = "normal", bonusQuestions = 0) {
  const modifier = RARITY_MODIFIERS[rarity] ?? 0;
  const extra = Math.max(0, Math.floor(Number(bonusQuestions) || 0));
  const dc = 10 + cr + modifier;
  const margin = rollTotal - dc;
  const baseQuestions = margin >= 0 ? 1 + Math.floor(margin / 5) : 0;
  const questions = baseQuestions + extra;
  return { cr, dc, margin, baseQuestions, bonusQuestions: extra, questions };
}

function isKnowledgeRollMessage(message) {
  const rollTotal = getRollTotal(message);
  if (!Number.isFinite(rollTotal)) return false;

  const candidates = getKnowledgeRollTextCandidates(message);
  return candidates.some((candidate) => matchesAllowedKnowledgeSkill(candidate));
}

function getKnowledgeRollTextCandidates(message) {
  const candidates = [];
  const add = (value) => {
    if (value === undefined || value === null) return;
    const text = stripHtml(String(value)).trim();
    if (text) candidates.push(text);
  };

  add(message.flavor);
  add(message.content);

  const flags = message.flags ?? {};
  for (const namespace of ["pf1", "pf1e", "core"]) {
    const data = flags[namespace];
    if (!data || typeof data !== "object") continue;
    add(data.skill);
    add(data.skillId);
    add(data.skillKey);
    add(data.skillName);
    add(data.label);
    add(data.name);
    add(data.title);
    add(data?.subject?.skill);
    add(data?.subject?.skillId);
    add(data?.subject?.skillKey);
    add(data?.context?.skill);
    add(data?.context?.skillId);
    add(data?.context?.skillKey);
    add(data?.roll?.skill);
    add(data?.roll?.skillId);
    add(data?.roll?.skillKey);
  }

  return candidates;
}

function matchesAllowedKnowledgeSkill(value) {
  const raw = String(value ?? "").trim();
  if (!raw) return false;
  const lower = raw.toLocaleLowerCase();
  const normalized = lower.replace(/ё/g, "е");
  const compact = normalizeToken(normalized);

  if (ALLOWED_KNOWLEDGE_SKILL_KEYS.has(compact)) return true;

  const keyMatch = normalized.match(/\b(k(?:ar|du|en|ge|hi|lo|na|no|pl|re))\b/);
  if (keyMatch && ALLOWED_KNOWLEDGE_SKILL_KEYS.has(keyMatch[1])) return true;

  const englishInParen = normalized.match(/knowledge\s*[(:]\s*([^\)]+)\)?/i);
  if (englishInParen) {
    const subject = normalizeKnowledgeSubject(englishInParen[1]);
    if (ALLOWED_KNOWLEDGE_ENGLISH.includes(subject)) return true;
  }

  const russianInParen = normalized.match(/знани[ея]\s*[(:]\s*([^\)]+)\)?/i);
  if (russianInParen) {
    const subject = normalizeKnowledgeSubject(russianInParen[1]);
    if (ALLOWED_KNOWLEDGE_RUSSIAN.map(normalizeKnowledgeSubject).includes(subject)) return true;
  }

  return false;
}

function normalizeKnowledgeSubject(value) {
  return String(value ?? "")
    .toLocaleLowerCase()
    .replace(/ё/g, "е")
    .replace(/skill\s*check/gi, "")
    .replace(/проверка\s*навыка/gi, "")
    .replace(/[\[\]{}]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function getRollTotal(message) {
  const rolls = message.rolls ?? [];
  if (rolls.length && Number.isFinite(Number(rolls[0].total))) return Number(rolls[0].total);
  const legacyRoll = message.roll;
  if (legacyRoll && Number.isFinite(Number(legacyRoll.total))) return Number(legacyRoll.total);
  return NaN;
}

function getActorCR(actor) {
  if (!actor) return NaN;
  const candidate = valueFromPaths(actor, [
    "system.details.cr.total",
    "system.details.cr.value",
    "system.details.cr.base",
    "system.details.cr",
    "system.attributes.cr.total",
    "system.attributes.cr.value",
    "system.attributes.cr",
    "system.cr.total",
    "system.cr.value",
    "system.cr"
  ], null);
  return parseCR(candidate);
}

function parseCR(value) {
  if (value === null || value === undefined || value === "") return NaN;
  if (typeof value === "number") return value;
  if (typeof value === "object") {
    for (const key of ["total", "value", "base", "cr"]) {
      const parsed = parseCR(value[key]);
      if (Number.isFinite(parsed)) return parsed;
    }
    return NaN;
  }
  const text = String(value).trim().replace(",", ".");
  if (text.includes("/")) {
    const [a, b] = text.split("/").map(Number);
    if (Number.isFinite(a) && Number.isFinite(b) && b !== 0) return a / b;
  }
  const numeric = Number(text.match(/-?\d+(\.\d+)?/)?.[0]);
  return Number.isFinite(numeric) ? numeric : NaN;
}


function getActorFromReference(ref) {
  const token = getTokenFromReference(ref);
  return token?.actor ?? game.actors.get(ref?.actorId) ?? null;
}

function formatDamageReduction(actor) {
  const raw = valueFromPaths(actor, ["system.traits.dr", "system.attributes.dr", "system.traits.damageReduction"], null);
  if (raw === null || raw === undefined || raw === "") return "—";

  const entries = collectDREntries(raw);
  const customParts = collectDRCustomParts(raw);
  const parts = entries.map(formatDREntry).filter(Boolean);

  for (const part of customParts) {
    const translated = translateCompoundText(part, "damage");
    if (translated && !parts.includes(translated)) parts.push(translated);
  }

  if (!parts.length && typeof raw === "string") parts.push(translateCompoundText(raw, "damage"));
  return parts.length ? parts.join("; ") : "—";
}

function collectDREntries(value, entries = []) {
  if (value === null || value === undefined) return entries;
  if (Array.isArray(value)) {
    value.forEach((item) => collectDREntries(item, entries));
    return entries;
  }
  if (typeof value !== "object") return entries;

  const hasEntryShape = value.amount !== undefined || value.types !== undefined || value.bypass !== undefined || value.damageTypes !== undefined;
  if (hasEntryShape) entries.push(value);

  for (const [key, child] of Object.entries(value)) {
    if (["custom", "special", "other", "amount", "types", "bypass", "damageTypes", "operator"].includes(key)) continue;
    if (key === "value" || Array.isArray(child) || (child && typeof child === "object")) collectDREntries(child, entries);
  }
  return entries;
}

function collectDRCustomParts(value, parts = []) {
  if (value === null || value === undefined) return parts;
  if (typeof value === "string") {
    if (value.trim()) parts.push(value.trim());
    return parts;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectDRCustomParts(item, parts));
    return parts;
  }
  if (typeof value === "object") {
    for (const key of ["custom", "special", "other"]) {
      if (typeof value[key] === "string" && value[key].trim()) parts.push(value[key].trim());
    }
    for (const [key, child] of Object.entries(value)) {
      if (["custom", "special", "other", "amount", "types", "bypass", "damageTypes", "operator"].includes(key)) continue;
      if (child && typeof child === "object") collectDRCustomParts(child, parts);
    }
  }
  return [...new Set(parts)];
}

function formatDREntry(entry) {
  const amount = entry.amount ?? entry.total ?? entry.valueAmount ?? entry.dr;
  if (amount === undefined || amount === null || amount === "") return "";
  const rawTypes = entry.types ?? entry.bypass ?? entry.damageTypes ?? entry.type ?? [];
  const types = collectTraitTokens(rawTypes).tokens
    .map((token) => String(token).trim())
    .filter((token) => token && !["—", "-", "none", "null", "undefined"].includes(token.toLocaleLowerCase()))
    .map((token) => translateDRType(token));
  const connector = entry.operator === false ? " и " : " или ";
  return `${formatValue(amount)}/${types.length ? types.join(connector) : "—"}`;
}

function translateDRType(token) {
  const label = translateToken(token, "damage");
  const normalized = normalizeToken(token);
  if (["slashing", "piercing", "bludgeoning", "fire", "cold", "acid", "electricity", "sonic", "force"].includes(normalized)) return capitalizeFirst(label);
  return label.toLocaleLowerCase();
}

function formatTraitFromPaths(actor, paths, dictionary = "damage") {
  const raw = valueFromPaths(actor, paths, null);
  if (raw === null || raw === undefined || raw === "") return "—";
  const collected = collectTraitTokens(raw);
  const values = collected.tokens.map((token) => translateToken(token, dictionary)).filter(Boolean);
  const custom = collected.custom.map((token) => translateCompoundText(token, dictionary)).filter(Boolean);
  const parts = [...new Set([...values, ...custom])];
  return parts.length ? parts.join(", ") : "—";
}

function formatEnergyImmunity(actor) {
  const explicit = formatTraitFromPaths(actor, ["system.traits.ei", "system.traits.energyImmunities", "system.traits.energyImmunity", "system.traits.immune.energy", "system.traits.immunities.energy"], "damage");
  if (explicit !== "—") return explicit;
  return formatFilteredTraitFromPaths(actor, ["system.traits.di", "system.traits.damageImmunities", "system.traits.damageImmunity"], "damage", ENERGY_DAMAGE_KEYS);
}

function formatFilteredTraitFromPaths(actor, paths, dictionary, allowedKeys) {
  const raw = valueFromPaths(actor, paths, null);
  if (raw === null || raw === undefined || raw === "") return "—";
  const collected = collectTraitTokens(raw);
  const values = collected.tokens
    .filter((token) => allowedKeys.has(normalizeToken(token)))
    .map((token) => translateToken(token, dictionary))
    .filter(Boolean);
  return values.length ? [...new Set(values)].join(", ") : "—";
}

function formatLanguages(actor) {
  return formatTraitFromPaths(actor, ["system.traits.languages", "system.details.languages", "system.languages"], "language");
}

function formatSenses(actor) {
  const senses = valueFromPaths(actor, ["system.traits.senses", "system.attributes.senses", "system.senses"], null);
  if (senses === null || senses === undefined || senses === "") return "—";
  if (typeof senses === "string") return translateCompoundText(senses, "sense");

  const parts = [];
  const add = (text) => {
    if (text && !parts.includes(text)) parts.push(text);
  };

  const addSenseValue = (keys, labelKey, { booleanOnly = false } = {}) => {
    const value = findObjectValueByKeys(senses, keys);
    if (value === undefined || value === null || value === false || value === "" || value === 0 || value === "0") return;
    const label = SENSE_LABELS[labelKey] ?? labelKey;
    if (value === true || booleanOnly) {
      add(label);
      return;
    }
    const extracted = extractNumericalOrTextValue(value);
    if (extracted === true || extracted === "") add(label);
    else if (!isEmptySpeed(extracted)) add(`${label} ${formatDistanceValue(extracted)}`);
  };

  addSenseValue(["lowLight", "lowlight", "lowLightVision", "ll"], "lowLight", { booleanOnly: true });
  addSenseValue(["darkvision", "darkVision", "dv", "nightVision"], "darkvision");
  addSenseValue(["tremorsense", "ts"], "tremorsense");
  addSenseValue(["blindsense", "bs"], "blindsense");
  addSenseValue(["blindsight", "blindsightFt"], "blindsight");
  addSenseValue(["scent"], "scent");
  addSenseValue(["seeInvisibility", "seeInvisible", "seeInvis"], "seeInvisibility", { booleanOnly: true });
  addSenseValue(["trueSeeing", "truesight"], "trueSeeing", { booleanOnly: true });
  addSenseValue(["seeInDarkness", "seeDarkness"], "seeInDarkness", { booleanOnly: true });

  const collected = collectTraitTokens(senses);
  collected.tokens.map((token) => translateToken(token, "sense")).forEach(add);
  collected.custom.map((token) => translateCompoundText(token, "sense")).forEach(add);

  return parts.length ? parts.join("; ") : "—";
}

function formatDistanceValue(value) {
  const text = formatValue(value);
  if (text === "—") return text;
  if (/\b(ft|feet)\b/i.test(text)) return text.replace(/\bfeet\b/gi, "фт.").replace(/\bft\b/gi, "фт.");
  if (/^\d+(\.\d+)?$/.test(text)) return `${text} фт.`;
  return text;
}

function collectTraitTokens(value, result = { tokens: [], custom: [] }) {
  if (value === null || value === undefined || value === "" || value === false) return result;
  if (value instanceof Set) {
    Array.from(value).forEach((item) => collectTraitTokens(item, result));
    return result;
  }
  if (Array.isArray(value)) {
    value.forEach((item) => collectTraitTokens(item, result));
    return result;
  }
  if (typeof value === "string" || typeof value === "number") {
    String(value).split(/[,;|]/).map((part) => part.trim()).filter(Boolean).forEach((part) => result.tokens.push(part));
    return result;
  }
  if (typeof value === "object") {
    for (const key of ["custom", "special", "other"]) {
      if (typeof value[key] === "string" && value[key].trim()) result.custom.push(value[key].trim());
    }
    if (value.value !== undefined) collectTraitTokens(value.value, result);
    if (value.selected !== undefined) collectTraitTokens(value.selected, result);
    if (value.label && value.enabled) result.tokens.push(value.label);

    for (const [key, child] of Object.entries(value)) {
      if (["value", "selected", "custom", "special", "other", "label", "enabled"].includes(key)) continue;
      if (child === true) result.tokens.push(key);
      else if (child && typeof child === "object" && (child.enabled === true || child.value === true || child.selected === true)) result.tokens.push(key);
      else if (Array.isArray(child) || child instanceof Set) collectTraitTokens(child, result);
    }
  }
  result.tokens = [...new Set(result.tokens.filter((token) => String(token).trim()))];
  result.custom = [...new Set(result.custom.filter((token) => String(token).trim()))];
  return result;
}

function translateToken(token, dictionary = "damage") {
  const text = String(token ?? "").trim();
  if (!text) return "";
  if (/[А-Яа-яЁё]/.test(text)) return text;

  const normalized = normalizeToken(text);
  const maps = {
    damage: DAMAGE_LABELS,
    condition: CONDITION_LABELS,
    language: LANGUAGE_LABELS,
    sense: SENSE_LABELS
  };

  const i18n = localizePF1Term(text, dictionary);
  if (i18n && i18n !== text) return i18n;

  return maps[dictionary]?.[normalized] ?? maps[dictionary]?.[text] ?? text;
}

function translateCompoundText(text, dictionary = "damage") {
  let result = String(text ?? "").trim();
  if (!result) return "";
  result = result
    .replace(/\bcold[ _-]?iron\b/gi, translateToken("coldiron", dictionary))
    .replace(/\bor\b/gi, "или")
    .replace(/\band\b/gi, "и")
    .replace(/\bft\.?\b/gi, "фт.")
    .replace(/\bfeet\b/gi, "фт.");

  const maps = dictionary === "condition" ? CONDITION_LABELS : dictionary === "language" ? LANGUAGE_LABELS : dictionary === "sense" ? SENSE_LABELS : DAMAGE_LABELS;
  const keys = Object.keys(maps).sort((a, b) => b.length - a.length);
  for (const key of keys) {
    const label = maps[key];
    const pattern = new RegExp(`\\b${escapeRegExp(key).replace(/[ _-]/g, "[ _-]?")}\\b`, "gi");
    result = result.replace(pattern, label);
  }
  return result;
}

function localizePF1Term(term, dictionary) {
  const normalized = normalizeToken(term);
  const cap = normalized.charAt(0).toUpperCase() + normalized.slice(1);
  const keySets = {
    damage: [`PF1.DamageTypes.${normalized}`, `PF1.DamageType.${normalized}`, `PF1.DamType${cap}`, `PF1.Damage.${normalized}`],
    condition: [`PF1.Conditions.${normalized}`, `PF1.Condition.${normalized}`, `PF1.ConditionTypes.${normalized}`, `PF1.ConditionType.${normalized}`, `PF1.${cap}`],
    language: [`PF1.Languages.${normalized}`, `PF1.Language.${normalized}`],
    sense: [`PF1.Senses.${normalized}`, `PF1.Sense.${normalized}`]
  };
  for (const key of keySets[dictionary] ?? []) {
    const localized = game.i18n.localize(key);
    if (localized && localized !== key) return localized;
  }
  return "";
}

function localizeIfKey(value) {
  const text = String(value ?? "");
  if (!text.includes(".")) return text;
  const localized = game.i18n.localize(text);
  return localized && localized !== text ? localized : text;
}

function normalizeToken(token) {
  return String(token ?? "").trim().replace(/[\s-]+/g, "_").replace(/[^\p{L}\p{N}_]/gu, "").replace(/^_+|_+$/g, "").toLocaleLowerCase();
}

function normalizeSearchText(value) {
  return String(value ?? "")
    .toLocaleLowerCase()
    .replace(/ё/g, "е")
    .replace(/\s+/g, " ")
    .trim();
}

function findObjectValueByKeys(obj, keys) {
  if (!obj || typeof obj !== "object") return undefined;
  for (const key of keys) {
    if (obj[key] !== undefined) return obj[key];
  }
  const lowered = new Map(Object.keys(obj).map((key) => [key.toLocaleLowerCase(), key]));
  for (const key of keys) {
    const actual = lowered.get(String(key).toLocaleLowerCase());
    if (actual) return obj[actual];
  }
  return undefined;
}

function formatFeatureItemsHtml(items) {
  if (!items?.length) return "";
  return formatFeatureEntriesHtml(items.map(featureEntryFromItem));
}

function formatFeatureEntriesHtml(entries) {
  const list = (entries ?? []).filter((entry) => entry?.name);
  if (!list.length) return "";
  const blocks = list.map((entry) => {
    const featureData = base64Json({
      id: entry.id || "",
      uuid: entry.uuid || "",
      name: entry.name || "Особенность",
      img: entry.img || "icons/svg/book.svg",
      type: entry.type || "Item",
      description: entry.description || ""
    });
    return `
      <div class="pf1mk-feature-item" data-item-id="${escapeAttr(entry.id || "")}">
        <img class="pf1mk-feature-img" src="${escapeAttr(entry.img || "icons/svg/book.svg")}" alt="">
        <div class="pf1mk-feature-body">
          <a class="content-link pf1mk-view-feature" data-feature="${escapeAttr(featureData)}"><i class="fas fa-suitcase"></i> ${escapeHtml(entry.name)}</a>
        </div>
      </div>`;
  }).join("");
  return `<div class="pf1mk-feature-list">${blocks}</div>`;
}

function capitalizeFirst(value) {
  const text = String(value ?? "");
  return text ? text.charAt(0).toLocaleUpperCase() + text.slice(1) : text;
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function valueFromPaths(actor, paths, fallback = undefined) {
  for (const path of paths) {
    const value = foundry.utils.getProperty(actor, path);
    if (value !== undefined && value !== null && value !== "") return value;
  }
  return fallback;
}

function formatValue(value) {
  if (value === null || value === undefined || value === "") return "—";
  if (Array.isArray(value)) return value.length ? value.map(formatValue).join(", ") : "—";
  if (value instanceof Set) return value.size ? Array.from(value).map(formatValue).join(", ") : "—";
  if (typeof value === "object") {
    if (value.custom) {
      const base = formatValue(value.value ?? value.total ?? value.base ?? "");
      return base && base !== "—" ? `${base}; ${value.custom}` : String(value.custom);
    }
    if (value.value !== undefined && Array.isArray(value.value)) return formatValue(value.value);
    if (value.value !== undefined && typeof value.value !== "object") return formatValue(value.value);
    if (value.total !== undefined && typeof value.total !== "object") return formatValue(value.total);
    const entries = Object.entries(value)
      .filter(([, v]) => v !== null && v !== undefined && v !== "" && v !== false)
      .map(([k, v]) => `${k}: ${formatValue(v)}`);
    return entries.length ? entries.join("; ") : "—";
  }
  return String(value);
}

function formatSigned(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return formatValue(value);
  return `${numeric >= 0 ? "+" : ""}${numeric}`;
}

function formatNumber(value) {
  if (!Number.isFinite(Number(value))) return "—";
  return Number.isInteger(Number(value)) ? String(Number(value)) : String(Number(value).toFixed(2)).replace(/\.00$/, "");
}


function getAskerActorName(message, targetToken = null) {
  const controlled = Array.from(canvas?.tokens?.controlled ?? []);
  const controlledAsker = controlled.find((token) => token?.id && token.id !== targetToken?.id);
  if (controlledAsker?.name) return controlledAsker.name;

  const speaker = message?.speaker ?? {};
  if (speaker.token) {
    const token = canvas?.tokens?.get(speaker.token) ?? canvas?.tokens?.placeables?.find((t) => t.id === speaker.token);
    if (token?.name) return token.name;
  }
  if (speaker.actor) {
    const actor = game.actors?.get(speaker.actor);
    if (actor?.name) return actor.name;
  }
  return "";
}

function getSpeakerFor(token, actor = null) {
  const tokenDocument = token?.document ?? token ?? null;
  if (tokenDocument) return ChatMessage.getSpeaker({ token: tokenDocument });
  if (actor) return ChatMessage.getSpeaker({ actor });
  return ChatMessage.getSpeaker();
}

function getTokenReference(token, actor = null) {
  const tokenDocument = token?.document ?? token;
  const sceneId = tokenDocument?.parent?.id ?? tokenDocument?.scene?.id ?? canvas?.scene?.id ?? null;
  return {
    sceneId,
    tokenId: token?.id ?? tokenDocument?.id ?? null,
    actorId: token?.actor?.id ?? tokenDocument?.actor?.id ?? actor?.id ?? null
  };
}

function getTokenFromReference(ref) {
  if (!ref) return null;
  const scene = game.scenes.get(ref.sceneId) ?? canvas?.scene;
  if (!scene) return null;
  if (canvas?.scene?.id === scene.id && ref.tokenId) {
    return canvas.tokens?.get(ref.tokenId) ?? canvas.tokens?.placeables?.find((token) => token.id === ref.tokenId) ?? null;
  }
  return null;
}


function getActorOwnerIds(actor) {
  if (!actor?.ownership) return [];
  return game.users
    .filter((user) => !user.isGM && (actor.testUserPermission?.(user, "OWNER") || actor.testUserPermission?.(user, "OBSERVER")))
    .map((user) => user.id);
}

function getRequesterAndGMRecipientIds(requesterId) {
  const recipients = new Set(game.users.filter((user) => user.isGM).map((user) => user.id));
  if (requesterId && game.users.get(requesterId)) recipients.add(requesterId);
  return Array.from(recipients);
}

async function playGMInfoRequestSound() {
  if (!game.user?.isGM) return;
  if (!game.settings.get(MODULE_ID, "enableGMRequestSound")) return;

  const volume = Math.min(1, Math.max(0, Number(game.settings.get(MODULE_ID, "gmRequestSoundVolume")) || 0));
  if (volume <= 0) return;

  const src = CONFIG?.sounds?.notification ?? "sounds/notify.wav";
  try {
    if (game.audio?.play) {
      await game.audio.play(src, { volume, loop: false });
      return;
    }
    if (globalThis.AudioHelper?.play) {
      await globalThis.AudioHelper.play({ src, volume, loop: false, autoplay: true }, false);
      return;
    }
    if (foundry?.audio?.AudioHelper?.play) {
      await foundry.audio.AudioHelper.play({ src, volume, loop: false, autoplay: true }, false);
    }
  } catch (err) {
    console.warn(`${MODULE_ID} | Could not play GM request sound`, err);
  }
}

function hasActiveGM() {
  return game.users.some((user) => user.active && user.isGM);
}

function isPrimaryActiveGM() {
  const activeGMs = game.users.filter((user) => user.active && user.isGM).sort((a, b) => a.id.localeCompare(b.id));
  return activeGMs[0]?.id === game.user.id;
}

function answerTextToHtml(text, placeholders = {}) {
  const lines = String(text || "").split(/\r?\n/);
  const blocks = [];

  for (const rawLine of lines) {
    const trimmed = rawLine.trim();
    if (!trimmed) continue;
    if (trimmed === "{{FEATURES}}") {
      blocks.push(placeholders.FEATURES || `<div class="pf1mk-answer-row">—</div>`);
      continue;
    }
    if (trimmed.includes("{{FEATURES}}")) {
      const [before, after] = trimmed.split("{{FEATURES}}");
      const cleanedBefore = before.replace(/^[-*]\s*/, "").trim();
      if (cleanedBefore) blocks.push(renderAnswerLine(cleanedBefore));
      blocks.push(placeholders.FEATURES || `<div class="pf1mk-answer-row">—</div>`);
      const cleanedAfter = String(after ?? "").trim();
      if (cleanedAfter) blocks.push(renderAnswerLine(cleanedAfter));
      continue;
    }
    blocks.push(renderAnswerLine(trimmed.replace(/^[-*]\s*/, "")));
  }

  return blocks.length ? `<div class="pf1mk-answer-list">${blocks.join("")}</div>` : "<p>—</p>";
}

function renderAnswerLine(line) {
  const clean = String(line ?? "").trim();
  const isSkill = clean.startsWith("Навык:");
  const classes = `pf1mk-answer-row${isSkill ? " pf1mk-skill-row" : ""}`;
  return `<div class="${classes}">${formatAnswerLineHtml(clean)}</div>`;
}

function formatAnswerLineHtml(line) {
  const clean = String(line ?? "").trim();
  const match = clean.match(/^([^:]{1,80}:)(\s*)(.*)$/);
  if (!match) return formatAnswerBodyHtml(clean);
  const label = `<div class="pf1mk-answer-label"><strong>${escapeHtml(match[1])}</strong></div>`;
  const body = String(match[3] || "").trim();
  return `${label}${body ? formatAnswerBodyHtml(body) : ""}`;
}

function formatAnswerBodyHtml(text) {
  const clean = String(text ?? "").trim();
  if (!clean) return "";
  const parts = clean.split(/\s*;\s*/).map((part) => part.trim()).filter(Boolean);
  if (parts.length <= 1) return `<div class="pf1mk-answer-text">${escapeHtml(clean)}</div>`;
  return `<div class="pf1mk-answer-text pf1mk-answer-split">${parts.map((part) => `<div>${escapeHtml(part)}</div>`).join("")}</div>`;
}

function markdownLikeToHtml(text) {
  return answerTextToHtml(text);
}

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value).replace(/`/g, "&#096;");
}

function base64Json(data) {
  return btoa(unescape(encodeURIComponent(JSON.stringify(data))));
}

function safeJsonFromBase64(value) {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(value))));
  } catch (err) {
    console.warn(`${MODULE_ID} | Bad payload`, err);
    ui.notifications.error("Не удалось прочитать данные запроса.");
    return null;
  }
}
