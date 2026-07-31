"use strict";

const STORAGE_KEY = "autismThroughGraceDataV1";

const LESSONS = {
  "understanding-autism": {
    title: "Understanding Autism",
    category: "Autism Education",
    faithOnly: false,
    content: `
      <p>Autism is a lifelong neurodevelopmental difference. It can influence communication, sensory processing, routines, interests, movement, learning, and social experiences.</p>
      <h4>A respectful perspective</h4>
      <p>Autistic people are not broken. Each person has an individual combination of strengths, preferences, communication styles, and support needs.</p>
      <h4>Helpful caregiver practices</h4>
      <ul>
        <li>Observe before making assumptions.</li>
        <li>Respect different forms of communication.</li>
        <li>Adjust environments when possible.</li>
        <li>Celebrate strengths, interests, and authentic connection.</li>
      </ul>
    `
  },
  "early-signs": {
    title: "Early Signs and Diagnosis",
    category: "Development and Evaluation",
    faithOnly: false,
    content: `
      <p>Possible signs may include differences in communication, play, sensory responses, routines, movement, social timing, or emotional regulation.</p>
      <h4>Possible observations</h4>
      <ul>
        <li>Strong reactions to sound, light, texture, taste, or movement.</li>
        <li>Repeated patterns of play or focused interests.</li>
        <li>Differences in spoken language, gestures, or social interaction.</li>
        <li>Difficulty with unexpected transitions.</li>
      </ul>
      <p>Individual signs do not confirm a diagnosis. A qualified professional should complete an evaluation.</p>
    `
  },
  "myths-and-stigma": {
    title: "Myths and Stigma",
    category: "Respectful Understanding",
    faithOnly: false,
    content: `
      <p>Misinformation can create fear, shame, and unrealistic expectations.</p>
      <h4>Important facts</h4>
      <ul>
        <li>Autism is not caused by poor parenting.</li>
        <li>Autistic people experience emotions and connection.</li>
        <li>Speaking ability does not determine intelligence.</li>
        <li>There is no single way autism looks.</li>
        <li>Support needs can change across situations and life stages.</li>
      </ul>
    `
  },
  "after-diagnosis": {
    title: "First Steps After Diagnosis",
    category: "Caregiver Guidance",
    faithOnly: false,
    content: `
      <p>A diagnosis can bring relief, grief, hope, uncertainty, or several emotions at once.</p>
      <h4>Helpful first steps</h4>
      <ol>
        <li>Keep copies of evaluations and recommendations.</li>
        <li>Write down questions for future appointments.</li>
        <li>Learn about school, medical, and community supports.</li>
        <li>Focus on immediate needs rather than solving everything at once.</li>
        <li>Seek respectful autistic-led and caregiver communities.</li>
      </ol>
    `
  },
  "behaviors-and-patterns": {
    title: "Behaviors and Patterns",
    category: "Observation and Support",
    faithOnly: false,
    content: `
      <p>Behavior is often communication. A visible reaction may relate to sensory discomfort, pain, fatigue, uncertainty, anxiety, communication barriers, or an unexpected change.</p>
      <h4>Observe the pattern</h4>
      <ul>
        <li>What happened before the behavior?</li>
        <li>What need may be communicated?</li>
        <li>What happened afterward?</li>
        <li>What environmental change helped?</li>
      </ul>
    `
  },
  strengths: {
    title: "Celebrating Strengths",
    category: "Strength-Based Support",
    faithOnly: false,
    content: `
      <p>Strength-based caregiving recognizes interests, skills, creativity, persistence, honesty, memory, humor, focus, and unique ways of connecting.</p>
      <h4>Ways to celebrate strengths</h4>
      <ul>
        <li>Notice effort, not only outcomes.</li>
        <li>Use interests as bridges for learning and connection.</li>
        <li>Offer meaningful choices.</li>
        <li>Record milestones that matter to your child and family.</li>
      </ul>
    `
  },
  "caregiver-self-care": {
    title: "Caregiver Self-Care",
    category: "Caregiver Well-Being",
    faithOnly: false,
    content: `
      <p>Self-care is not a reward for completing every responsibility. It supports your ability to continue caring.</p>
      <h4>Practical forms of care</h4>
      <ul>
        <li>Rest when possible.</li>
        <li>Ask trusted people for help.</li>
        <li>Reduce unnecessary expectations.</li>
        <li>Attend your own health appointments.</li>
        <li>Make space for difficult and hopeful emotions.</li>
      </ul>
    `
  },
  "anxiety-support": {
    title: "Anxiety and Emotional Support",
    category: "Emotional Regulation",
    faithOnly: false,
    content: `
      <p>Anxiety may appear as avoidance, shutdown, repeated questions, irritability, sleep changes, physical complaints, or a strong need for predictability.</p>
      <h4>Supportive approaches</h4>
      <ul>
        <li>Use clear and predictable language.</li>
        <li>Reduce demands during high stress.</li>
        <li>Offer quiet space without using it as punishment.</li>
        <li>Validate distress before problem-solving.</li>
        <li>Seek professional support when anxiety affects safety or daily life.</li>
      </ul>
    `
  },
  "routines-transitions": {
    title: "Routines and Transitions",
    category: "Daily Support",
    faithOnly: false,
    content: `
      <p>Predictable routines can reduce uncertainty and support independence. Transitions may be difficult even when the next activity is enjoyable.</p>
      <h4>Helpful strategies</h4>
      <ul>
        <li>Give advance notice before a change.</li>
        <li>Use visual schedules or timers.</li>
        <li>Keep instructions short and concrete.</li>
        <li>Allow recovery time between demanding activities.</li>
        <li>Prepare an alternate plan when possible.</li>
      </ul>
    `
  },
  "sensory-support": {
    title: "Sensory Support",
    category: "Sensory Processing",
    faithOnly: false,
    content: `
      <p>Sensory input can be calming, distracting, painful, or overwhelming. A child may seek certain sensations while avoiding others.</p>
      <h4>Possible supports</h4>
      <ul>
        <li>Headphones or quieter spaces.</li>
        <li>Reduced lighting.</li>
        <li>Comfortable clothing.</li>
        <li>Movement and heavy-work activities.</li>
        <li>Predictable access to regulating tools.</li>
      </ul>
    `
  },
  "family-support": {
    title: "Family and Sibling Support",
    category: "Family Well-Being",
    faithOnly: false,
    content: `
      <p>Each family member may understand and experience autism differently.</p>
      <h4>Supporting the family</h4>
      <ul>
        <li>Use honest, age-appropriate explanations.</li>
        <li>Allow siblings to express mixed feelings.</li>
        <li>Avoid giving children adult caregiving responsibility.</li>
        <li>Protect one-on-one time when possible.</li>
        <li>Encourage relatives to learn respectful support practices.</li>
      </ul>
    `
  },
  "faith-and-hope": {
    title: "Faith, Hope, and Prayer",
    category: "Optional Faith Reflection",
    faithOnly: true,
    content: `
      <p>Faith can offer comfort, meaning, community, and hope while still allowing room for difficult emotions and unanswered questions.</p>
      <h4>Gentle reflection</h4>
      <ul>
        <li>Bring honest feelings into prayer.</li>
        <li>Seek communities that respect autistic people and sensory needs.</li>
        <li>Reject messages that blame disability on weak faith.</li>
        <li>Let grace include rest, boundaries, support, and self-compassion.</li>
      </ul>
    `
  }
};

const AFFIRMATIONS = {
  general: [
    "You are doing meaningful work, one caring step at a time.",
    "You do not have to solve everything today.",
    "Your patience, effort, and love matter.",
    "Small steps can still be important progress.",
    "You are allowed to rest without feeling guilty.",
    "Your feelings deserve space and compassion.",
    "You can begin again as many times as you need.",
    "Your care makes a difference, even on difficult days.",
    "You are learning alongside your child.",
    "Your presence is more valuable than perfection.",
    "It is okay to ask for help.",
    "You are not alone in this journey.",
    "Progress may look different each day, and that is okay.",
    "Every caring choice you make has value.",
    "There is room for hope, rest, learning, and joy today."
  ],
  faith: [
    "Grace is present even in moments that feel uncertain.",
    "You can bring today’s worries to God and take the next step in peace.",
    "God’s strength can meet you where your strength feels limited.",
    "You and your child are deeply known, valued, and loved.",
    "Let grace guide you through what you cannot control today.",
    "Hope can remain present even when the path is unclear.",
    "You do not carry this journey alone.",
    "Faith can make room for questions, rest, and honest emotion."
  ]
};

const NATIONAL_RESOURCES = [
  {
    id: "asan",
    name: "Autistic Self Advocacy Network",
    category: "advocacy",
    scope: "national",
    city: "",
    state: "",
    description:
      "Autistic-led advocacy, policy information, educational resources, and self-advocacy materials.",
    website: "https://autisticadvocacy.org",
    contact: "",
    personal: false
  },
  {
    id: "parent-center-hub",
    name: "Center for Parent Information and Resources",
    category: "education",
    scope: "national",
    city: "",
    state: "",
    description:
      "Special education information and links to Parent Training and Information Centers throughout the United States.",
    website: "https://www.parentcenterhub.org",
    contact: "",
    personal: false
  },
  {
    id: "the-arc",
    name: "The Arc",
    category: "advocacy",
    scope: "national",
    city: "",
    state: "",
    description:
      "Advocacy and support for people with intellectual and developmental disabilities and their families.",
    website: "https://thearc.org",
    contact: "",
    personal: false
  },
  {
    id: "easterseals",
    name: "Easterseals",
    category: "therapy-services",
    scope: "national",
    city: "",
    state: "",
    description:
      "Community services that may include early intervention, therapy, respite, employment, and family support.",
    website: "https://www.easterseals.com",
    contact: "",
    personal: false
  },
  {
    id: "211",
    name: "211 Community Resources",
    category: "parent-support",
    scope: "national",
    city: "",
    state: "",
    description:
      "Connections to local health, housing, food, financial, and community services.",
    website: "https://www.211.org",
    contact: "Dial 211 where available",
    personal: false
  },
  {
    id: "idea",
    name: "U.S. Department of Education — IDEA",
    category: "education",
    scope: "national",
    city: "",
    state: "",
    description:
      "Federal information about special education rights and the Individuals with Disabilities Education Act.",
    website: "https://sites.ed.gov/idea",
    contact: "",
    personal: false
  },
  {
    id: "benefits",
    name: "USA.gov Benefits",
    category: "financial-assistance",
    scope: "national",
    city: "",
    state: "",
    description:
      "Information about government benefits and financial support programs.",
    website: "https://www.usa.gov/benefits",
    contact: "",
    personal: false
  },
  {
    id: "988",
    name: "988 Suicide & Crisis Lifeline",
    category: "crisis-support",
    scope: "national",
    city: "",
    state: "",
    description:
      "Immediate emotional crisis support by phone, text, or online chat in the United States.",
    website: "https://988lifeline.org",
    contact: "Call or text 988",
    personal: false
  }
];

const DEFAULT_STATE = {
  version: 1,
  onboardingComplete: false,
  caregiver: {
    displayName: "",
    roles: [],
    city: "",
    state: ""
  },
  preferences: {
    faithMode: false,
    journalReminder: false,
    journalReminderTime: "19:00",
    appointmentReminder: true,
    appointmentReminderLead: "1-day",
    pinProtection: false,
    pin: "",
    pinHash: "",
    pinSalt: "",
    recoveryHash: "",
    recoverySalt: ""
  },
  children: [],
  journalEntries: [],
  appointments: [],
  lessonProgress: {},
  personalResources: [],
  favoriteResourceIds: [],
  selectedChildId: "",
  selectedLessonId: "understanding-autism",
  selectedDate: "",
  calendarMonth: "",
  affirmationHistory: [],
  currentAffirmation: null
};

let state = loadState();
let currentOnboardingStep = 1;
let confirmationCallback = null;
let toastTimer = null;
let calendarDate = state.calendarMonth
  ? new Date(`${state.calendarMonth}-01T12:00:00`)
  : new Date();

const $ = (id) => document.getElementById(id);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

document.addEventListener("DOMContentLoaded", init);

function init() {
  bindNavigation();
  bindDialogs();
  bindCharacterCounters();
  bindChipLimits();
  bindHome();
  bindJournal();
  bindCalendar();
  bindChildren();
  bindLearning();
  bindResources();
  bindSettings();
  bindOnboarding();
  bindAppointments();
  bindExport();
  bindGlobalControls();

  applyStateToForms();
  setDefaultDates();
  renderAll();
  updateConnectionStatus();

  window.addEventListener("online", updateConnectionStatus);
  window.addEventListener("offline", updateConnectionStatus);

  if (state.preferences.pinProtection && hasPinCredential()) {
    openDialog($("pin-unlock-modal"));
    $("pin-unlock-input").focus();
  } else if (!state.onboardingComplete) {
    openDialog($("onboarding-modal"));
  }
}

function bindNavigation() {
  $$("[data-panel-target]").forEach((button) => {
    button.addEventListener("click", () => {
      showPanel(button.dataset.panelTarget);
    });
  });

  $$("[data-navigate-to]").forEach((button) => {
    button.addEventListener("click", () => {
      showPanel(button.dataset.navigateTo);
    });
  });
}

function showPanel(panelId) {
  $$("[data-app-panel]").forEach((panel) => {
    const active = panel.id === panelId;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });

  $$("[data-panel-target]").forEach((button) => {
    const active = button.dataset.panelTarget === panelId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });

  if (panelId === "calendar-panel") renderCalendar();
  if (panelId === "children-panel") renderChildren();
  if (panelId === "learn-panel") renderLearning();
  if (panelId === "resources-panel") renderResources();

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function bindDialogs() {
  document.addEventListener("click", (event) => {
    const opener = event.target.closest("[data-open-modal]");
    const closer = event.target.closest("[data-close-modal]");

    if (opener) {
      const dialog = $(opener.dataset.openModal);
      if (!dialog) return;

      if (dialog.id === "appointment-modal") prepareAppointmentForm();
      if (dialog.id === "child-profile-modal") prepareChildForm();
      if (dialog.id === "resource-modal") prepareResourceForm();

      openDialog(dialog);
    }

    if (closer) {
      closeDialog($(closer.dataset.closeModal));
    }
  });

  $$("dialog").forEach((dialog) => {
    dialog.addEventListener("click", (event) => {
      if (
        event.target === dialog &&
        dialog.id !== "pin-unlock-modal" &&
        dialog.id !== "onboarding-modal"
      ) {
        closeDialog(dialog);
      }
    });

    dialog.addEventListener("cancel", (event) => {
      if (
        dialog.id === "pin-unlock-modal" ||
        dialog.id === "onboarding-modal"
      ) {
        event.preventDefault();
      }
    });
  });
}

function openDialog(dialog) {
  if (!dialog) return;
  if (!dialog.open) dialog.showModal();
}

function closeDialog(dialog) {
  if (dialog?.open) dialog.close();
}

function bindCharacterCounters() {
  bindCounter("quick-checkin-note", "quick-checkin-counter");
  bindCounter("journal-entry-content", "journal-entry-counter");
}

function bindCounter(inputId, counterId) {
  const input = $(inputId);
  const counter = $(counterId);
  if (!input || !counter) return;

  const update = () => {
    counter.textContent = `${input.value.length} / ${input.maxLength}`;
  };

  input.addEventListener("input", update);
  update();
}

function bindChipLimits() {
  $$("[data-max-selections]").forEach((group) => {
    group.addEventListener("change", (event) => {
      const limit = Number(group.dataset.maxSelections);
      const checked = $$('input[type="checkbox"]:checked', group);

      if (checked.length > limit) {
        event.target.checked = false;
        showToast(`Choose no more than ${limit} options.`, "warning");
      }
    });
  });
}

function bindHome() {
  $("quick-checkin-form").addEventListener("submit", (event) => {
    event.preventDefault();
    clearValidation();

    const emotions = checkedValues("quick-emotions");
    const note = $("quick-checkin-note").value.trim();

    if (!emotions.length) {
      showValidation(["Choose at least one emotion for your check-in."]);
      return;
    }

    const now = new Date();

    state.journalEntries.unshift({
      id: createId("journal"),
      date: dateInputValue(now),
      time: timeInputValue(now),
      childId: "",
      title: "Daily Check-In",
      content:
        note || `Today I feel ${formatList(emotions.map(titleCase))}.`,
      emotions,
      tags: ["check-in"],
      createdAt: now.toISOString(),
      updatedAt: now.toISOString()
    });

    saveState();
    event.currentTarget.reset();
    updateCounter("quick-checkin-note", "quick-checkin-counter");
    renderHome();
    renderJournalHistory();
    renderCalendar();
    showToast("Your check-in was saved successfully.", "success");
  });
}

function bindJournal() {
  $("journal-entry-form").addEventListener("submit", saveJournalEntry);
  $("new-journal-entry-button").addEventListener("click", clearJournalForm);
  $("clear-journal-entry-button").addEventListener("click", clearJournalForm);
  $("generate-reflection-prompt-button").addEventListener(
    "click",
    generateReflection
  );
  $("copy-reflection-button").addEventListener("click", copyReflection);

  $("journal-search-input").addEventListener("input", renderJournalHistory);
  $("journal-filter-date").addEventListener("change", renderJournalHistory);

  $("clear-journal-history-button").addEventListener("click", () => {
    if (!state.journalEntries.length) {
      showToast("There are no journal entries to clear.", "warning");
      return;
    }

    confirmAction(
      "Clear Journal History",
      "This permanently deletes every saved journal entry from this device.",
      () => {
        state.journalEntries = [];
        saveState();
        clearJournalForm();
        renderJournalHistory();
        renderCalendar();
        renderHome();
        showToast("Journal history was cleared.", "success");
      }
    );
  });

  $("journal-history-list").addEventListener("click", (event) => {
    const edit = event.target.closest("[data-edit-journal]");
    const remove = event.target.closest("[data-delete-journal]");

    if (edit) editJournal(edit.dataset.editJournal);
    if (remove) deleteJournal(remove.dataset.deleteJournal);
  });
}

function saveJournalEntry(event) {
  event.preventDefault();
  clearValidation();

  const date = $("journal-entry-date").value;
  const time = $("journal-entry-time").value;
  const content = $("journal-entry-content").value.trim();
  const emotions = checkedValues("journal-emotions");
  const errors = [];

  if (!date) errors.push("Choose a journal date.");
  if (!time) errors.push("Choose a journal time.");
  if (!emotions.length) errors.push("Choose at least one emotion.");
  if (!content) errors.push("Write a reflection before saving.");

  if (errors.length) {
    showValidation(errors);
    return;
  }

  const id = $("journal-entry-id").value || createId("journal");
  const existing = state.journalEntries.find((entry) => entry.id === id);
  const now = new Date().toISOString();

  const entry = {
    id,
    date,
    time,
    childId: $("journal-child-profile").value,
    title: $("journal-entry-title").value.trim() || "Untitled Reflection",
    content,
    emotions,
    tags: $("journal-entry-tags")
      .value.split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };

  const index = state.journalEntries.findIndex((item) => item.id === id);

  if (index >= 0) state.journalEntries[index] = entry;
  else state.journalEntries.unshift(entry);

  state.journalEntries.sort(sortJournalDescending);
  saveState();
  clearJournalForm();
  renderJournalHistory();
  renderCalendar();
  renderHome();
  showToast("Your information was saved successfully.", "success");
}

function clearJournalForm() {
  $("journal-entry-form").reset();
  $("journal-entry-id").value = "";
  setJournalDateTime();
  setCheckedValues("journal-emotions", []);
  $("reflection-output").className = "output-area empty-state";
  $("reflection-output").innerHTML = `
    <p>Select your emotions and add some context, then choose
    “Generate Reflection Prompt.”</p>
  `;
  $("copy-reflection-button").disabled = true;
  updateCounter("journal-entry-content", "journal-entry-counter");
  clearValidation();
}

function editJournal(id) {
  const entry = state.journalEntries.find((item) => item.id === id);
  if (!entry) return;

  $("journal-entry-id").value = entry.id;
  $("journal-entry-date").value = entry.date;
  $("journal-entry-time").value = entry.time;
  $("journal-child-profile").value = entry.childId || "";
  $("journal-entry-title").value = entry.title || "";
  $("journal-entry-content").value = entry.content || "";
  $("journal-entry-tags").value = (entry.tags || []).join(", ");

  setCheckedValues("journal-emotions", entry.emotions || []);
  updateCounter("journal-entry-content", "journal-entry-counter");
  showPanel("journal-panel");
  $("journal-entry-title").focus();
}

function deleteJournal(id) {
  const entry = state.journalEntries.find((item) => item.id === id);
  if (!entry) return;

  confirmAction(
    "Delete Journal Entry",
    `Delete “${entry.title}”? This cannot be undone.`,
    () => {
      state.journalEntries = state.journalEntries.filter(
        (item) => item.id !== id
      );
      saveState();
      renderJournalHistory();
      renderCalendar();
      renderHome();
      showToast("The journal entry was deleted.", "success");
    }
  );
}

function generateReflection() {
  clearValidation();

  const emotions = checkedValues("journal-emotions");
  const content = $("journal-entry-content").value.trim();
  const title = $("journal-entry-title").value.trim();

  if (!emotions.length || !content) {
    showValidation([
      "Choose at least one emotion and write some context before generating a reflection."
    ]);
    return;
  }

  const button = $("generate-reflection-prompt-button");
  setLoading(button, true);

  $("reflection-output").className = "output-area";
  $("reflection-output").textContent =
    "Creating a supportive reflection for you…";
  $("copy-reflection-button").disabled = true;

  window.setTimeout(() => {
    const questions = pickDistinct(
      [
        "What part of this experience most needs acknowledgment without judgment?",
        "What need—yours or your child’s—may be asking for attention?",
        "What did you handle with care, even if the outcome was not perfect?",
        "What expectation could be adjusted to make the next step gentler?",
        "What support could you request instead of carrying this alone?",
        "What is one small action that may help you feel more grounded?",
        "What would you say to another caregiver experiencing this same moment?"
      ],
      3
    );

    const feelingText = formatList(emotions.map(titleCase));
    let output = "";

    if (title) output += `${title}\n\n`;

    output += `You described feeling ${feelingText.toLowerCase()}. More than one feeling can be true at the same time, and none of them need to be minimized.\n\n`;
    output += `What you shared:\n${truncate(content, 500)}\n\n`;
    output += "Reflection prompts:\n";

    questions.forEach((question, index) => {
      output += `${index + 1}. ${question}\n`;
    });

    output +=
      "\nGentle next step:\nChoose one manageable action, such as taking a short pause, writing down a question, adjusting an expectation, or contacting someone you trust.";

    if (state.preferences.faithMode) {
      output +=
        "\n\nFaith reflection:\nWhere might grace meet you in this experience? You may bring unresolved feelings into prayer and ask for wisdom for only the next step.";
    }

    $("reflection-output").textContent = output;
    $("copy-reflection-button").disabled = false;
    setLoading(button, false);
  }, 600);
}

async function copyReflection() {
  const text = $("reflection-output").textContent.trim();
  if (!text) return;

  const successful = await copyText(text);

  showToast(
    successful
      ? "The reflection was copied."
      : "Copying was unavailable. Select the text and copy it manually.",
    successful ? "success" : "warning"
  );
}

function renderJournalHistory() {
  const search = $("journal-search-input").value.trim().toLowerCase();
  const date = $("journal-filter-date").value;

  const entries = state.journalEntries.filter((entry) => {
    const searchable = [
      entry.title,
      entry.content,
      ...(entry.emotions || []),
      ...(entry.tags || [])
    ]
      .join(" ")
      .toLowerCase();

    return (
      (!search || searchable.includes(search)) &&
      (!date || entry.date === date)
    );
  });

  const list = $("journal-history-list");

  if (!entries.length) {
    list.className = "entry-list empty-state";
    list.innerHTML = `<p>${
      state.journalEntries.length
        ? "No entries match the current filters."
        : "Nothing has been added here yet. Save your first journal entry to get started."
    }</p>`;
    return;
  }

  list.className = "entry-list";
  list.innerHTML = entries
    .map((entry) => {
      const child = state.children.find(
        (item) => item.id === entry.childId
      );

      return `
        <article class="entry-card">
          <div class="entry-card__header">
            <div>
              <h4>${escapeHtml(entry.title)}</h4>
              <div class="entry-card__meta">
                <span>${escapeHtml(formatDate(entry.date))}</span>
                <span>${escapeHtml(formatTime(entry.time))}</span>
                ${child ? `<span>${escapeHtml(child.name)}</span>` : ""}
              </div>
            </div>
            <div class="button-row button-row--compact">
              <button class="text-button" type="button"
                data-edit-journal="${entry.id}">Edit</button>
              <button class="text-button text-button--danger" type="button"
                data-delete-journal="${entry.id}">Delete</button>
            </div>
          </div>
          <p>${escapeHtml(truncate(entry.content, 320))}</p>
          <div class="entry-card__meta">
            ${(entry.emotions || [])
              .map(
                (emotion) =>
                  `<span class="meta-pill">${escapeHtml(
                    titleCase(emotion)
                  )}</span>`
              )
              .join("")}
            ${(entry.tags || [])
              .map(
                (tag) =>
                  `<span class="tag">${escapeHtml(tag)}</span>`
              )
              .join("")}
          </div>
        </article>
      `;
    })
    .join("");
}

function bindCalendar() {
  $("calendar-previous-month-button").addEventListener("click", () => {
    calendarDate.setMonth(calendarDate.getMonth() - 1);
    state.calendarMonth = monthValue(calendarDate);
    saveState();
    renderCalendar();
  });

  $("calendar-next-month-button").addEventListener("click", () => {
    calendarDate.setMonth(calendarDate.getMonth() + 1);
    state.calendarMonth = monthValue(calendarDate);
    saveState();
    renderCalendar();
  });

  $("calendar-grid").addEventListener("click", (event) => {
    const day = event.target.closest("[data-calendar-date]");
    if (!day) return;

    state.selectedDate = day.dataset.calendarDate;
    saveState();
    renderCalendar();
  });

  $("selected-date-events").addEventListener(
    "click",
    handleCalendarActions
  );
  $("upcoming-appointments-list").addEventListener(
    "click",
    handleCalendarActions
  );
}

function renderCalendar() {
  const year = calendarDate.getFullYear();
  const month = calendarDate.getMonth();
  const first = new Date(year, month, 1);
  const start = new Date(year, month, 1 - first.getDay());
  const today = dateInputValue(new Date());

  $("calendar-month-heading").textContent = first.toLocaleDateString(
    "en-US",
    { month: "long", year: "numeric" }
  );

  const cells = [];

  for (let index = 0; index < 42; index += 1) {
    const day = new Date(start);
    day.setDate(start.getDate() + index);

    const value = dateInputValue(day);
    const journalCount = state.journalEntries.filter(
      (entry) => entry.date === value
    ).length;
    const appointmentCount = state.appointments.filter(
      (appointment) => appointment.date === value
    ).length;

    const classes = ["calendar-day"];
    if (day.getMonth() !== month) classes.push("is-outside-month");
    if (value === today) classes.push("is-today");
    if (value === state.selectedDate) classes.push("is-selected");

    cells.push(`
      <button class="${classes.join(" ")}" type="button"
        role="gridcell" data-calendar-date="${value}"
        aria-label="${escapeAttribute(
          `${formatDate(value)}. ${journalCount} journal entries. ${appointmentCount} appointments.`
        )}">
        <span class="calendar-day__number">${day.getDate()}</span>
        <span class="calendar-day__markers" aria-hidden="true">
          ${
            journalCount
              ? '<span class="calendar-marker calendar-marker--journal"></span>'
              : ""
          }
          ${
            appointmentCount
              ? '<span class="calendar-marker calendar-marker--appointment"></span>'
              : ""
          }
        </span>
      </button>
    `);
  }

  $("calendar-grid").innerHTML = cells.join("");
  renderSelectedDate();
  renderUpcomingAppointments();
}

function renderSelectedDate() {
  const date = state.selectedDate;

  if (!date) {
    $("selected-date-heading").textContent = "Choose a date";
    $("selected-date-events").className = "entry-list empty-state";
    $("selected-date-events").innerHTML =
      "<p>Select a calendar date to review saved items.</p>";
    return;
  }

  $("selected-date-heading").textContent = formatDate(date);

  const appointments = state.appointments.filter(
    (appointment) => appointment.date === date
  );
  const entries = state.journalEntries.filter(
    (entry) => entry.date === date
  );

  if (!appointments.length && !entries.length) {
    $("selected-date-events").className = "entry-list empty-state";
    $("selected-date-events").innerHTML =
      "<p>No journal entries or appointments are saved for this date.</p>";
    return;
  }

  $("selected-date-events").className = "entry-list";
  $("selected-date-events").innerHTML = [
    ...appointments.map(appointmentCard),
    ...entries.map(
      (entry) => `
        <article class="entry-card">
          <div class="entry-card__header">
            <div>
              <h4>${escapeHtml(entry.title)}</h4>
              <div class="entry-card__meta">
                <span>Journal</span>
                <span>${escapeHtml(formatTime(entry.time))}</span>
              </div>
            </div>
            <button class="text-button" type="button"
              data-open-journal="${entry.id}">Open</button>
          </div>
          <p>${escapeHtml(truncate(entry.content, 180))}</p>
        </article>
      `
    )
  ].join("");
}

function renderUpcomingAppointments() {
  const now = new Date();
  const appointments = state.appointments
    .filter((appointment) => appointmentDate(appointment) >= now)
    .sort(sortAppointmentsAscending);

  const list = $("upcoming-appointments-list");

  if (!appointments.length) {
    list.className = "entry-list empty-state";
    list.innerHTML = "<p>No upcoming appointments have been added.</p>";
    return;
  }

  list.className = "entry-list";
  list.innerHTML = appointments.slice(0, 8).map(appointmentCard).join("");
}

function handleCalendarActions(event) {
  const edit = event.target.closest("[data-edit-appointment]");
  const remove = event.target.closest("[data-delete-appointment]");
  const complete = event.target.closest("[data-complete-appointment]");
  const journal = event.target.closest("[data-open-journal]");

  if (edit) editAppointment(edit.dataset.editAppointment);
  if (remove) deleteAppointment(remove.dataset.deleteAppointment);
  if (complete) toggleAppointmentComplete(complete.dataset.completeAppointment);
  if (journal) editJournal(journal.dataset.openJournal);
}

function bindChildren() {
  $$("[data-child-panel-target]").forEach((button) => {
    button.addEventListener("click", () => {
      showChildSection(button.dataset.childPanelTarget);
    });
  });

  $("child-profile-form").addEventListener("submit", saveChildProfile);

  $("child-profile-list").addEventListener("click", (event) => {
    const select = event.target.closest("[data-select-child]");
    const edit = event.target.closest("[data-edit-child]");

    if (select) {
      state.selectedChildId = select.dataset.selectChild;
      saveState();
      renderChildren();
    }

    if (edit) editChild(edit.dataset.editChild);
  });

  $("edit-child-profile-button").addEventListener("click", () => {
    if (state.selectedChildId) editChild(state.selectedChildId);
  });

  $("delete-child-profile-button").addEventListener("click", () => {
    if (state.selectedChildId) deleteChild(state.selectedChildId);
  });

  $("child-observation-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addChildItem(
      "observations",
      {
        id: createId("observation"),
        date: $("child-observation-date").value,
        text: $("child-observation-text").value.trim(),
        createdAt: new Date().toISOString()
      },
      [
        !$("child-observation-date").value && "Choose an observation date.",
        !$("child-observation-text").value.trim() &&
          "Write an observation."
      ],
      event.currentTarget
    );
  });

  $("child-routine-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addChildItem(
      "routines",
      {
        id: createId("routine"),
        title: $("child-routine-title").value.trim(),
        steps: $("child-routine-steps").value.trim(),
        createdAt: new Date().toISOString()
      },
      [
        !$("child-routine-title").value.trim() &&
          "Enter a routine name.",
        !$("child-routine-steps").value.trim() &&
          "Write the routine notes."
      ],
      event.currentTarget
    );
  });

  $("child-milestone-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addChildItem(
      "milestones",
      {
        id: createId("milestone"),
        date: $("child-milestone-date").value,
        text: $("child-milestone-text").value.trim(),
        createdAt: new Date().toISOString()
      },
      [
        !$("child-milestone-date").value && "Choose a milestone date.",
        !$("child-milestone-text").value.trim() &&
          "Write the milestone or achievement."
      ],
      event.currentTarget
    );
  });

  $("child-sensory-form").addEventListener("submit", (event) => {
    event.preventDefault();
    addChildItem(
      "sensoryNotes",
      {
        id: createId("sensory"),
        category: $("child-sensory-category").value,
        text: $("child-sensory-text").value.trim(),
        createdAt: new Date().toISOString()
      },
      [
        !$("child-sensory-category").value &&
          "Choose a sensory category.",
        !$("child-sensory-text").value.trim() &&
          "Write a sensory note."
      ],
      event.currentTarget
    );
  });

  [
    "child-observations-list",
    "child-routines-list",
    "child-milestones-list",
    "child-sensory-list"
  ].forEach((id) => {
    $(id).addEventListener("click", deleteChildItem);
  });

  $("child-appointments-list").addEventListener(
    "click",
    handleCalendarActions
  );
}

function showChildSection(panelId) {
  $$("[data-child-detail-panel]").forEach((panel) => {
    const active = panel.id === panelId;
    panel.hidden = !active;
    panel.classList.toggle("is-active", active);
  });

  $$("[data-child-panel-target]").forEach((button) => {
    const active = button.dataset.childPanelTarget === panelId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
  });
}

function prepareChildForm(child = null) {
  $("child-profile-form").reset();
  $("child-profile-id").value = "";
  $("child-profile-modal-title").textContent = "Add Child Profile";

  if (!child) return;

  $("child-profile-modal-title").textContent = "Edit Child Profile";
  $("child-profile-id").value = child.id;
  $("child-profile-name").value = child.name || "";
  $("child-profile-birthdate").value = child.birthdate || "";
  $("child-profile-pronouns").value = child.pronouns || "";
  $("child-profile-strengths").value = child.strengths || "";
  $("child-profile-support-notes").value = child.supportNotes || "";
}

function saveChildProfile(event) {
  event.preventDefault();
  clearValidation();

  const name = $("child-profile-name").value.trim();

  if (!name) {
    showValidation(["Enter a first name or nickname."]);
    return;
  }

  const id = $("child-profile-id").value || createId("child");
  const existing = state.children.find((child) => child.id === id);
  const now = new Date().toISOString();

  const child = {
    id,
    name,
    birthdate: $("child-profile-birthdate").value,
    pronouns: $("child-profile-pronouns").value,
    strengths: $("child-profile-strengths").value.trim(),
    supportNotes: $("child-profile-support-notes").value.trim(),
    observations: existing?.observations || [],
    routines: existing?.routines || [],
    milestones: existing?.milestones || [],
    sensoryNotes: existing?.sensoryNotes || [],
    createdAt: existing?.createdAt || now,
    updatedAt: now
  };

  const index = state.children.findIndex((item) => item.id === id);

  if (index >= 0) state.children[index] = child;
  else state.children.push(child);

  state.selectedChildId = id;
  saveState();
  closeDialog($("child-profile-modal"));
  populateChildSelects();
  renderChildren();
  renderHome();
  showToast("The child profile was saved successfully.", "success");
}

function editChild(id) {
  const child = state.children.find((item) => item.id === id);
  if (!child) return;

  prepareChildForm(child);
  openDialog($("child-profile-modal"));
}

function deleteChild(id) {
  const child = state.children.find((item) => item.id === id);
  if (!child) return;

  confirmAction(
    "Delete Child Profile",
    `Delete ${child.name}’s profile, notes, routines, milestones, sensory information, and related appointments?`,
    () => {
      state.children = state.children.filter((item) => item.id !== id);
      state.appointments = state.appointments.filter(
        (appointment) => appointment.childId !== id
      );
      state.journalEntries = state.journalEntries.map((entry) =>
        entry.childId === id ? { ...entry, childId: "" } : entry
      );
      state.selectedChildId = state.children[0]?.id || "";
      saveState();
      populateChildSelects();
      renderChildren();
      renderCalendar();
      renderHome();
      showToast("The child profile was deleted.", "success");
    }
  );
}

function renderChildren() {
  const list = $("child-profile-list");

  if (!state.children.length) {
    list.className = "profile-grid empty-state";
    list.innerHTML =
      "<p>Nothing has been added here yet. Add a child profile to get started.</p>";
    $("selected-child-details").hidden = true;
    return;
  }

  if (
    !state.selectedChildId ||
    !state.children.some((child) => child.id === state.selectedChildId)
  ) {
    state.selectedChildId = state.children[0].id;
    saveState();
  }

  list.className = "profile-grid";
  list.innerHTML = state.children
    .map((child) => {
      const selected = child.id === state.selectedChildId;
      const next = state.appointments
        .filter(
          (appointment) =>
            appointment.childId === child.id &&
            appointmentDate(appointment) >= new Date()
        )
        .sort(sortAppointmentsAscending)[0];

      return `
        <article class="profile-card ${selected ? "is-selected" : ""}">
          <div class="profile-card__header">
            <div>
              <h3>${escapeHtml(child.name)}</h3>
              ${
                child.birthdate
                  ? `<div class="profile-card__meta"><span>${escapeHtml(
                      formatAge(child.birthdate)
                    )}</span></div>`
                  : ""
              }
            </div>
            <button class="text-button" type="button"
              data-edit-child="${child.id}">Edit</button>
          </div>
          <p>${
            child.strengths
              ? escapeHtml(truncate(child.strengths, 160))
              : "Add strengths and interests to personalize this profile."
          }</p>
          <p class="helper-text">${
            next
              ? `Next appointment: ${escapeHtml(formatDate(next.date))}`
              : "No upcoming appointments."
          }</p>
          <button class="button ${
            selected ? "button--primary" : "button--secondary"
          }" type="button" data-select-child="${child.id}">
            ${selected ? "Selected" : "View Profile"}
          </button>
        </article>
      `;
    })
    .join("");

  renderSelectedChild();
}

function renderSelectedChild() {
  const child = selectedChild();
  if (!child) return;

  $("selected-child-details").hidden = false;
  $("selected-child-name").textContent = child.name;

  $("child-overview-content").innerHTML = `
    <div class="form-grid form-grid--two">
      <div>
        <h4>Profile details</h4>
        <p><strong>Birthdate:</strong> ${
          child.birthdate
            ? escapeHtml(formatDate(child.birthdate))
            : "Not added"
        }</p>
        <p><strong>Pronouns:</strong> ${
          child.pronouns
            ? escapeHtml(formatPronouns(child.pronouns))
            : "Not specified"
        }</p>
      </div>
      <div>
        <h4>Saved information</h4>
        <p>${child.observations.length} observations</p>
        <p>${child.routines.length} routines</p>
        <p>${child.milestones.length} milestones</p>
        <p>${child.sensoryNotes.length} sensory notes</p>
      </div>
    </div>
    <h4>Strengths and interests</h4>
    <p>${escapeHtml(
      child.strengths || "No strengths or interests have been added."
    )}</p>
    <h4>Support notes</h4>
    <p>${escapeHtml(
      child.supportNotes || "No support notes have been added."
    )}</p>
  `;

  renderChildCollection(
    "child-observations-list",
    child.observations,
    "observation",
    "No observations have been saved.",
    (item) =>
      `<strong>${escapeHtml(formatDate(item.date))}</strong>
       <p>${escapeHtml(item.text)}</p>`
  );

  renderChildCollection(
    "child-routines-list",
    child.routines,
    "routine",
    "No routines have been saved.",
    (item) =>
      `<strong>${escapeHtml(item.title)}</strong>
       <p>${escapeHtml(item.steps)}</p>`
  );

  renderChildCollection(
    "child-milestones-list",
    child.milestones,
    "milestone",
    "No milestones have been saved.",
    (item) =>
      `<strong>${escapeHtml(formatDate(item.date))}</strong>
       <p>${escapeHtml(item.text)}</p>`
  );

  renderChildCollection(
    "child-sensory-list",
    child.sensoryNotes,
    "sensory",
    "No sensory notes have been saved.",
    (item) =>
      `<strong>${escapeHtml(titleCase(item.category))}</strong>
       <p>${escapeHtml(item.text)}</p>`
  );

  const appointments = state.appointments
    .filter((appointment) => appointment.childId === child.id)
    .sort(sortAppointmentsAscending);

  const appointmentList = $("child-appointments-list");

  if (!appointments.length) {
    appointmentList.className = "entry-list empty-state";
    appointmentList.innerHTML =
      "<p>No appointments have been added for this child.</p>";
  } else {
    appointmentList.className = "entry-list";
    appointmentList.innerHTML = appointments
      .map(appointmentCard)
      .join("");
  }
}

function renderChildCollection(
  listId,
  items,
  type,
  emptyMessage,
  formatter
) {
  const list = $(listId);

  if (!items.length) {
    list.className = "entry-list empty-state";
    list.innerHTML = `<p>${emptyMessage}</p>`;
    return;
  }

  list.className = "entry-list";
  list.innerHTML = [...items]
    .reverse()
    .map(
      (item) => `
        <article class="entry-card">
          <div class="entry-card__header">
            <div>${formatter(item)}</div>
            <button class="text-button text-button--danger" type="button"
              data-delete-child-item="${item.id}"
              data-child-item-type="${type}">Delete</button>
          </div>
        </article>
      `
    )
    .join("");
}

function addChildItem(collection, item, rawErrors, form) {
  clearValidation();

  const child = selectedChild();
  if (!child) {
    showValidation(["Select or create a child profile first."]);
    return;
  }

  const errors = rawErrors.filter(Boolean);

  if (errors.length) {
    showValidation(errors);
    return;
  }

  child[collection].push(item);
  child.updatedAt = new Date().toISOString();
  saveState();
  form.reset();
  setChildDates();
  renderSelectedChild();
  showToast("Your information was saved successfully.", "success");
}

function deleteChildItem(event) {
  const button = event.target.closest("[data-delete-child-item]");
  if (!button) return;

  const child = selectedChild();
  if (!child) return;

  const collectionMap = {
    observation: "observations",
    routine: "routines",
    milestone: "milestones",
    sensory: "sensoryNotes"
  };

  const collection = collectionMap[button.dataset.childItemType];
  if (!collection) return;

  confirmAction(
    "Delete Saved Item",
    "Delete this saved item? This action cannot be undone.",
    () => {
      child[collection] = child[collection].filter(
        (item) => item.id !== button.dataset.deleteChildItem
      );
      saveState();
      renderSelectedChild();
      showToast("The saved item was deleted.", "success");
    }
  );
}

function bindLearning() {
  $("lesson-navigation").addEventListener("click", (event) => {
    const button = event.target.closest("[data-lesson-id]");
    if (!button) return;

    state.selectedLessonId = button.dataset.lessonId;
    saveState();
    renderLearning();
  });

  $("lesson-search-input").addEventListener("input", filterLessons);

  $("lesson-reflection-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const current =
      state.lessonProgress[state.selectedLessonId] || {};

    state.lessonProgress[state.selectedLessonId] = {
      ...current,
      reflection: $("lesson-reflection-input").value.trim(),
      completed: Boolean(current.completed),
      updatedAt: new Date().toISOString()
    };

    saveState();
    showToast("Your lesson reflection was saved.", "success");
  });

  $("mark-lesson-complete-button").addEventListener("click", () => {
    const current =
      state.lessonProgress[state.selectedLessonId] || {};

    state.lessonProgress[state.selectedLessonId] = {
      ...current,
      reflection: current.reflection || "",
      completed: !current.completed,
      updatedAt: new Date().toISOString()
    };

    saveState();
    renderLearning();
    renderHome();
    showToast(
      state.lessonProgress[state.selectedLessonId].completed
        ? "Lesson marked complete."
        : "Lesson marked incomplete.",
      "success"
    );
  });
}

function renderLearning() {
  let lesson = LESSONS[state.selectedLessonId];

  if (!lesson || (lesson.faithOnly && !state.preferences.faithMode)) {
    state.selectedLessonId = "understanding-autism";
    lesson = LESSONS[state.selectedLessonId];
    saveState();
  }

  $$("[data-faith-content]").forEach((element) => {
    element.hidden = !state.preferences.faithMode;
  });

  $$("[data-lesson-id]").forEach((button) => {
    const definition = LESSONS[button.dataset.lessonId];
    const active = button.dataset.lessonId === state.selectedLessonId;

    button.hidden =
      Boolean(definition.faithOnly) && !state.preferences.faithMode;
    button.classList.toggle("is-active", active);
  });

  const progress =
    state.lessonProgress[state.selectedLessonId] || {};

  $("lesson-category-label").textContent = lesson.category;
  $("lesson-title").textContent = lesson.title;
  $("lesson-content").innerHTML = lesson.content;
  $("lesson-reflection-input").value = progress.reflection || "";

  $("lesson-completion-status").textContent = progress.completed
    ? "Completed"
    : "Not completed";

  $("lesson-completion-status").className = `status-badge ${
    progress.completed ? "is-success" : ""
  }`;

  $("mark-lesson-complete-button").textContent = progress.completed
    ? "Mark Incomplete"
    : "Mark Complete";

  renderLearningProgress();
}

function filterLessons() {
  const query = $("lesson-search-input").value.trim().toLowerCase();

  $$("[data-lesson-id]").forEach((button) => {
    const lesson = LESSONS[button.dataset.lessonId];
    const match =
      !query ||
      `${lesson.title} ${lesson.category}`.toLowerCase().includes(query);
    const allowed =
      !lesson.faithOnly || state.preferences.faithMode;

    button.hidden = !match || !allowed;
  });
}

function renderLearningProgress() {
  const available = Object.entries(LESSONS).filter(
    ([, lesson]) => !lesson.faithOnly || state.preferences.faithMode
  );

  const completed = available.filter(
    ([id]) => state.lessonProgress[id]?.completed
  ).length;

  const percent = available.length
    ? Math.round((completed / available.length) * 100)
    : 0;

  $("learning-progress-bar").value = percent;
  $("learning-progress-label").textContent = completed
    ? `${completed} of ${available.length} lessons completed.`
    : "No lessons completed yet.";
}

function bindResources() {
  $("resource-filter-form").addEventListener("submit", (event) => {
    event.preventDefault();

    state.caregiver.city = $("resource-city-input").value.trim();
    state.caregiver.state = $("resource-state-select").value;

    $("settings-city-input").value = state.caregiver.city;
    $("settings-state-select").value = state.caregiver.state;

    saveState();
    renderResources();
    renderHome();
  });

  $("resource-category-select").addEventListener("change", renderResources);
  $("resource-scope-select").addEventListener("change", renderResources);
  $("show-favorite-resources-only").addEventListener(
    "change",
    renderResources
  );

  $("clear-resource-filters-button").addEventListener("click", () => {
    $("resource-category-select").value = "all";
    $("resource-scope-select").value = "all";
    $("show-favorite-resources-only").checked = false;
    renderResources();
  });

  $("personal-resource-form").addEventListener(
    "submit",
    savePersonalResource
  );

  $("resource-results-list").addEventListener(
    "click",
    handleResourceAction
  );
}

function prepareResourceForm(resource = null) {
  $("personal-resource-form").reset();
  $("personal-resource-id").value = "";
  $("personal-resource-city").value = state.caregiver.city;
  $("personal-resource-state").value = state.caregiver.state;

  if (!resource) return;

  $("personal-resource-id").value = resource.id;
  $("personal-resource-name").value = resource.name;
  $("personal-resource-category").value = resource.category;
  $("personal-resource-city").value = resource.city || "";
  $("personal-resource-state").value = resource.state || "";
  $("personal-resource-website").value = resource.website || "";
  $("personal-resource-contact").value = resource.contact || "";
  $("personal-resource-description").value = resource.description || "";
  $("personal-resource-favorite").checked =
    state.favoriteResourceIds.includes(resource.id);
}

function savePersonalResource(event) {
  event.preventDefault();
  clearValidation();

  const name = $("personal-resource-name").value.trim();
  const category = $("personal-resource-category").value;
  const description = $("personal-resource-description").value.trim();
  const errors = [];

  if (!name) errors.push("Enter a resource name.");
  if (!category) errors.push("Choose a resource category.");
  if (!description) errors.push("Add a description or notes.");

  if (errors.length) {
    showValidation(errors);
    return;
  }

  const id = $("personal-resource-id").value || createId("resource");
  const existing = state.personalResources.find(
    (resource) => resource.id === id
  );

  const resource = {
    id,
    name,
    category,
    scope: "personal",
    city: $("personal-resource-city").value.trim(),
    state: $("personal-resource-state").value.trim().toUpperCase(),
    website: $("personal-resource-website").value.trim(),
    contact: $("personal-resource-contact").value.trim(),
    description,
    personal: true,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const index = state.personalResources.findIndex(
    (item) => item.id === id
  );

  if (index >= 0) state.personalResources[index] = resource;
  else state.personalResources.push(resource);

  if ($("personal-resource-favorite").checked) addFavorite(id);
  else removeFavorite(id);

  saveState();
  closeDialog($("resource-modal"));
  renderResources();
  showToast("The resource was saved successfully.", "success");
}

function renderResources() {
  const city = $("resource-city-input").value.trim().toLowerCase();
  const stateCode = $("resource-state-select").value;
  const category = $("resource-category-select").value;
  const scope = $("resource-scope-select").value;
  const favoritesOnly = $("show-favorite-resources-only").checked;

  const resources = [
    ...state.personalResources,
    ...NATIONAL_RESOURCES
  ].filter((resource) => {
    const categoryMatch =
      category === "all" || resource.category === category;
    const scopeMatch =
      scope === "all" || resource.scope === scope;
    const favoriteMatch =
      !favoritesOnly ||
      state.favoriteResourceIds.includes(resource.id);

    let locationMatch = true;

    if (resource.scope === "local") {
      locationMatch =
        (!city || resource.city.toLowerCase() === city) &&
        (!stateCode || resource.state === stateCode);
    }

    if (resource.scope === "statewide") {
      locationMatch = !stateCode || resource.state === stateCode;
    }

    return categoryMatch && scopeMatch && favoriteMatch && locationMatch;
  });

  $("resource-results-summary").textContent = `${resources.length} resource${
    resources.length === 1 ? "" : "s"
  } found.`;

  const list = $("resource-results-list");

  if (!resources.length) {
    list.className = "resource-grid empty-state";
    list.innerHTML =
      "<p>No resources match the current filters. Try changing the category or availability.</p>";
    return;
  }

  list.className = "resource-grid";
  list.innerHTML = resources
    .map((resource) => {
      const favorite = state.favoriteResourceIds.includes(resource.id);

      return `
        <article class="resource-card">
          <div class="resource-card__header">
            <div>
              <h3>${escapeHtml(resource.name)}</h3>
              <div class="resource-card__meta">
                <span class="meta-pill">${escapeHtml(
                  resourceScope(resource)
                )}</span>
                <span class="meta-pill">${escapeHtml(
                  titleCase(resource.category)
                )}</span>
              </div>
            </div>
            <button class="icon-button favorite-button" type="button"
              data-toggle-favorite="${resource.id}"
              aria-pressed="${favorite}"
              aria-label="${
                favorite ? "Remove from favorites" : "Save as favorite"
              }">${favorite ? "★" : "☆"}</button>
          </div>
          <p>${escapeHtml(resource.description)}</p>
          ${
            resource.contact
              ? `<p><strong>Contact:</strong> ${escapeHtml(
                  resource.contact
                )}</p>`
              : ""
          }
          <div class="button-row">
            ${
              resource.website
                ? `<a class="button button--secondary"
                     href="${escapeAttribute(safeUrl(resource.website))}"
                     target="_blank" rel="noopener noreferrer">Visit Website</a>`
                : ""
            }
            ${
              resource.personal
                ? `
                  <button class="text-button" type="button"
                    data-edit-resource="${resource.id}">Edit</button>
                  <button class="text-button text-button--danger" type="button"
                    data-delete-resource="${resource.id}">Delete</button>
                `
                : ""
            }
          </div>
        </article>
      `;
    })
    .join("");
}

function handleResourceAction(event) {
  const favorite = event.target.closest("[data-toggle-favorite]");
  const edit = event.target.closest("[data-edit-resource]");
  const remove = event.target.closest("[data-delete-resource]");

  if (favorite) {
    const id = favorite.dataset.toggleFavorite;

    if (state.favoriteResourceIds.includes(id)) {
      removeFavorite(id);
      showToast("Resource removed from favorites.", "success");
    } else {
      addFavorite(id);
      showToast("Resource saved to favorites.", "success");
    }

    saveState();
    renderResources();
  }

  if (edit) {
    const resource = state.personalResources.find(
      (item) => item.id === edit.dataset.editResource
    );

    if (resource) {
      prepareResourceForm(resource);
      openDialog($("resource-modal"));
    }
  }

  if (remove) {
    const resource = state.personalResources.find(
      (item) => item.id === remove.dataset.deleteResource
    );
    if (!resource) return;

    confirmAction(
      "Delete Personal Resource",
      `Delete “${resource.name}” from your saved resources?`,
      () => {
        state.personalResources = state.personalResources.filter(
          (item) => item.id !== resource.id
        );
        removeFavorite(resource.id);
        saveState();
        renderResources();
        showToast("The resource was deleted.", "success");
      }
    );
  }
}

function bindSettings() {
  $("caregiver-profile-form").addEventListener("submit", (event) => {
    event.preventDefault();
    clearValidation();

    const roles = checkedValues("caregiver-roles");

    if (!roles.length) {
      showValidation(["Choose at least one caregiver role."]);
      return;
    }

    state.caregiver = {
      displayName: $("caregiver-display-name").value.trim(),
      roles,
      city: $("settings-city-input").value.trim(),
      state: $("settings-state-select").value
    };

    $("resource-city-input").value = state.caregiver.city;
    $("resource-state-select").value = state.caregiver.state;

    saveState();
    renderHome();
    renderResources();
    showToast("Your profile was saved successfully.", "success");
  });

  $("faith-mode-toggle").addEventListener("change", () => {
    state.preferences.faithMode = $("faith-mode-toggle").checked;
    saveState();
    renderAffirmation(true);
    renderLearning();

    showToast(
      state.preferences.faithMode
        ? "Faith Mode is enabled."
        : "Faith Mode is disabled.",
      "success"
    );
  });

  $("notification-settings-form").addEventListener(
    "submit",
    (event) => {
      event.preventDefault();

      state.preferences.journalReminder =
        $("journal-reminder-toggle").checked;
      state.preferences.journalReminderTime =
        $("journal-reminder-time").value || "19:00";
      state.preferences.appointmentReminder =
        $("appointment-reminder-toggle").checked;
      state.preferences.appointmentReminderLead =
        $("appointment-reminder-lead").value;

      saveState();
      showToast("Notification settings were saved.", "success");
    }
  );

  $("pin-protection-toggle").addEventListener("change", () => {
    $("pin-settings-fields").hidden =
      !$("pin-protection-toggle").checked;
  });

  $("security-settings-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    clearValidation();

    const enabled = $("pin-protection-toggle").checked;

    if (!enabled) {
      clearStoredSecurity();
      saveState();
      clearSecurityInputs();
      showToast("PIN protection was disabled.", "success");
      return;
    }

    const pin = $("security-pin-input").value;
    const confirmation = $("security-pin-confirm-input").value;
    const phrase = $("security-recovery-phrase-input").value.trim();
    const phraseConfirmation = $("security-recovery-phrase-confirm-input").value.trim();
    const errors = [];

    if (!/^\d{4,6}$/.test(pin)) errors.push("Enter a PIN containing 4 to 6 digits.");
    if (pin !== confirmation) errors.push("The PIN entries do not match.");
    if (phrase.length < 8) errors.push("Create a recovery phrase containing at least 8 characters.");
    if (phrase !== phraseConfirmation) errors.push("The recovery phrase entries do not match.");

    if (errors.length) {
      showValidation(errors);
      return;
    }

    try {
      const pinCredential = await createCredential(pin);
      const recoveryCredential = await createCredential(normalizeRecoveryPhrase(phrase));
      state.preferences.pinProtection = true;
      state.preferences.pin = "";
      state.preferences.pinHash = pinCredential.hash;
      state.preferences.pinSalt = pinCredential.salt;
      state.preferences.recoveryHash = recoveryCredential.hash;
      state.preferences.recoverySalt = recoveryCredential.salt;
      saveState();
      clearSecurityInputs();
      showToast("PIN protection and recovery were saved.", "success");
    } catch {
      showValidation(["Secure PIN storage is unavailable in this browser."]);
    }
  });

  $("backup-data-button").addEventListener("click", backupData);

  $("restore-data-button").addEventListener("click", () => {
    $("restore-data-input").click();
  });

  $("restore-data-input").addEventListener("change", restoreData);

  $("delete-all-data-button").addEventListener("click", () => {
    confirmAction(
      "Delete All App Data",
      "This permanently removes all journal entries, profiles, appointments, lesson progress, resources, and settings from this device.",
      () => {
        localStorage.removeItem(STORAGE_KEY);
        state = structuredClone(DEFAULT_STATE);
        applyStateToForms();
        setDefaultDates();
        renderAll();
        closeAllDialogs();
        openDialog($("onboarding-modal"));
        showToast("All app data was deleted.", "success");
      }
    );
  });
}

function backupData() {
  const payload = {
    application: "Autism Through Grace",
    exportedAt: new Date().toISOString(),
    data: state
  };

  downloadFile(
    `autism-through-grace-backup-${dateInputValue(new Date())}.json`,
    JSON.stringify(payload, null, 2),
    "application/json"
  );

  $("backup-status").textContent = `Backup created ${new Date().toLocaleString()}.`;
  showToast("Your backup file was created.", "success");
}

async function restoreData(event) {
  const file = event.target.files?.[0];
  event.target.value = "";

  if (!file) return;

  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const restored = parsed.data || parsed;

    if (
      !restored ||
      typeof restored !== "object" ||
      !Array.isArray(restored.journalEntries) ||
      !Array.isArray(restored.children)
    ) {
      throw new Error("Invalid backup");
    }

    confirmAction(
      "Restore Backup",
      "Restoring this backup replaces the information currently stored in the app.",
      () => {
        state = mergeState(restored);
        saveState();
        applyStateToForms();
        renderAll();
        showToast("Your backup was restored successfully.", "success");
      }
    );
  } catch {
    showToast(
      "The selected file is not a valid Autism Through Grace backup.",
      "error"
    );
  }
}

function bindAppointments() {
  $("appointment-form").addEventListener("submit", saveAppointment);
}

function prepareAppointmentForm(appointment = null) {
  $("appointment-form").reset();
  $("appointment-id").value = "";
  $("appointment-modal-title").textContent = "Add Appointment";
  $("appointment-reminder").value =
    state.preferences.appointmentReminderLead || "1-day";

  populateChildSelects();

  const child = selectedChild();
  if (child) $("appointment-child-profile").value = child.id;

  if (!appointment) {
    $("appointment-date").value = dateInputValue(new Date());
    return;
  }

  $("appointment-modal-title").textContent = "Edit Appointment";
  $("appointment-id").value = appointment.id;
  $("appointment-child-profile").value = appointment.childId;
  $("appointment-date").value = appointment.date;
  $("appointment-time").value = appointment.time;
  $("appointment-type").value = appointment.type;
  $("appointment-provider").value = appointment.provider || "";
  $("appointment-location").value = appointment.location || "";
  $("appointment-questions").value = appointment.questions || "";
  $("appointment-notes").value = appointment.notes || "";
  $("appointment-reminder").value = appointment.reminder || "none";
}

function saveAppointment(event) {
  event.preventDefault();
  clearValidation();

  const childId = $("appointment-child-profile").value;
  const date = $("appointment-date").value;
  const time = $("appointment-time").value;
  const type = $("appointment-type").value;
  const provider = $("appointment-provider").value.trim();
  const errors = [];

  if (!childId) errors.push("Choose a child profile.");
  if (!date) errors.push("Choose an appointment date.");
  if (!time) errors.push("Choose an appointment time.");
  if (!type) errors.push("Choose an appointment type.");
  if (!provider) errors.push("Enter a provider or organization.");

  if (errors.length) {
    showValidation(errors);
    return;
  }

  const id = $("appointment-id").value || createId("appointment");
  const existing = state.appointments.find(
    (appointment) => appointment.id === id
  );

  const appointment = {
    id,
    childId,
    date,
    time,
    type,
    provider,
    location: $("appointment-location").value.trim(),
    questions: $("appointment-questions").value.trim(),
    notes: $("appointment-notes").value.trim(),
    reminder: $("appointment-reminder").value,
    completed: existing?.completed || false,
    createdAt: existing?.createdAt || new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  const index = state.appointments.findIndex(
    (item) => item.id === id
  );

  if (index >= 0) state.appointments[index] = appointment;
  else state.appointments.push(appointment);

  state.appointments.sort(sortAppointmentsAscending);
  saveState();
  closeDialog($("appointment-modal"));
  renderCalendar();
  renderChildren();
  renderHome();
  showToast("The appointment was saved successfully.", "success");
}

function editAppointment(id) {
  const appointment = state.appointments.find(
    (item) => item.id === id
  );
  if (!appointment) return;

  prepareAppointmentForm(appointment);
  openDialog($("appointment-modal"));
}

function deleteAppointment(id) {
  const appointment = state.appointments.find(
    (item) => item.id === id
  );
  if (!appointment) return;

  confirmAction(
    "Delete Appointment",
    `Delete the appointment with ${appointment.provider}?`,
    () => {
      state.appointments = state.appointments.filter(
        (item) => item.id !== id
      );
      saveState();
      renderCalendar();
      renderChildren();
      renderHome();
      showToast("The appointment was deleted.", "success");
    }
  );
}

function toggleAppointmentComplete(id) {
  const appointment = state.appointments.find(
    (item) => item.id === id
  );
  if (!appointment) return;

  appointment.completed = !appointment.completed;
  appointment.updatedAt = new Date().toISOString();

  saveState();
  renderCalendar();
  renderChildren();
  renderHome();

  showToast(
    appointment.completed
      ? "Appointment marked complete."
      : "Appointment marked upcoming.",
    "success"
  );
}

function appointmentCard(appointment) {
  const child = state.children.find(
    (item) => item.id === appointment.childId
  );

  return `
    <article class="appointment-card ${
      appointment.completed ? "is-success" : ""
    }">
      <div class="appointment-card__header">
        <div>
          <h4>${escapeHtml(titleCase(appointment.type))}</h4>
          <div class="appointment-card__meta">
            <span>${escapeHtml(formatDate(appointment.date))}</span>
            <span>${escapeHtml(formatTime(appointment.time))}</span>
            ${child ? `<span>${escapeHtml(child.name)}</span>` : ""}
          </div>
        </div>
        <span class="status-badge ${
          appointment.completed ? "is-success" : ""
        }">${appointment.completed ? "Completed" : "Upcoming"}</span>
      </div>
      <p><strong>${escapeHtml(appointment.provider)}</strong></p>
      ${
        appointment.location
          ? `<p>${escapeHtml(appointment.location)}</p>`
          : ""
      }
      <div class="button-row button-row--compact">
        <button class="text-button" type="button"
          data-edit-appointment="${appointment.id}">Edit</button>
        <button class="text-button" type="button"
          data-complete-appointment="${appointment.id}">
          ${appointment.completed ? "Mark Upcoming" : "Mark Complete"}
        </button>
        <button class="text-button text-button--danger" type="button"
          data-delete-appointment="${appointment.id}">Delete</button>
      </div>
    </article>
  `;
}

function bindOnboarding() {
  $("onboarding-back-button").addEventListener("click", () => {
    showOnboardingStep(Math.max(1, currentOnboardingStep - 1));
  });

  $("onboarding-next-button").addEventListener("click", () => {
    if (!validateOnboardingStep(currentOnboardingStep)) return;
    showOnboardingStep(Math.min(4, currentOnboardingStep + 1));
  });

  $("onboarding-form").addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateOnboardingStep(4)) return;

    state.caregiver.displayName =
      $("onboarding-display-name").value.trim();
    state.caregiver.roles = checkedValues("onboarding-roles");
    state.caregiver.city = $("onboarding-city").value.trim();
    state.caregiver.state = $("onboarding-state").value;
    state.preferences.faithMode =
      $("onboarding-faith-mode").checked;

    const childName = $("onboarding-child-name").value.trim();

    if (childName) {
      const child = {
        id: createId("child"),
        name: childName,
        birthdate: $("onboarding-child-birthdate").value,
        pronouns: "",
        strengths: $("onboarding-child-strengths").value.trim(),
        supportNotes: "",
        observations: [],
        routines: [],
        milestones: [],
        sensoryNotes: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      state.children.push(child);
      state.selectedChildId = child.id;
    }

    state.onboardingComplete = true;
    saveState();
    closeDialog($("onboarding-modal"));
    applyStateToForms();
    renderAll();
    showToast("Welcome to Autism Through Grace.", "success");
  });
}

function validateOnboardingStep(step) {
  clearValidation();
  const errors = [];

  if (step === 1) {
    if (!$("onboarding-display-name").value.trim()) {
      errors.push("Enter the name you want the app to use.");
    }

    if (!checkedValues("onboarding-roles").length) {
      errors.push("Choose at least one caregiver role.");
    }
  }

  if (step === 3) {
    if (!$("onboarding-city").value.trim()) {
      errors.push("Enter your city.");
    }

    if (!$("onboarding-state").value) {
      errors.push("Choose your state.");
    }
  }

  if (errors.length) {
    showValidation(errors);
    return false;
  }

  return true;
}

function showOnboardingStep(step) {
  currentOnboardingStep = step;

  $$("[data-onboarding-step]").forEach((section) => {
    const active = Number(section.dataset.onboardingStep) === step;
    section.hidden = !active;
    section.classList.toggle("is-active", active);
  });

  $$("#onboarding-step-indicator span").forEach((indicator, index) => {
    indicator.classList.toggle("is-active", index + 1 === step);
  });

  $("onboarding-back-button").hidden = step === 1;
  $("onboarding-next-button").hidden = step === 4;
  $("onboarding-finish-button").hidden = step !== 4;
}

function bindExport() {
  $("export-form").addEventListener("submit", (event) => {
    event.preventDefault();

    const selections = $$(
      'input[name="export-sections"]:checked'
    ).map((input) => input.value);

    if (!selections.length) {
      showValidation(["Choose at least one section to export."]);
      return;
    }

    const data = {};

    if (selections.includes("journal")) {
      data.journalEntries = state.journalEntries;
    }

    if (selections.includes("children")) {
      data.children = state.children;
    }

    if (selections.includes("appointments")) {
      data.appointments = state.appointments;
    }

    if (selections.includes("learning")) {
      data.lessonProgress = state.lessonProgress;
    }

    if (selections.includes("resources")) {
      data.personalResources = state.personalResources;
      data.favoriteResourceIds = state.favoriteResourceIds;
    }

    const format = $("export-format-select").value;
    const date = dateInputValue(new Date());

    if (format === "json") {
      downloadFile(
        `autism-through-grace-export-${date}.json`,
        JSON.stringify(
          {
            application: "Autism Through Grace",
            exportedAt: new Date().toISOString(),
            data
          },
          null,
          2
        ),
        "application/json"
      );
    } else {
      downloadFile(
        `autism-through-grace-export-${date}.txt`,
        buildTextExport(data),
        "text/plain"
      );
    }

    closeDialog($("export-modal"));
    showToast("Your selected data was exported.", "success");
  });
}

function buildTextExport(data) {
  const lines = [
    "AUTISM THROUGH GRACE",
    `Exported: ${new Date().toLocaleString()}`,
    ""
  ];

  if (data.journalEntries) {
    lines.push("JOURNAL ENTRIES", "---------------");

    data.journalEntries.forEach((entry) => {
      lines.push(
        `${formatDate(entry.date)} ${formatTime(entry.time)}`,
        entry.title,
        `Feelings: ${(entry.emotions || []).map(titleCase).join(", ")}`,
        entry.content,
        ""
      );
    });
  }

  if (data.children) {
    lines.push("CHILD PROFILES", "--------------");

    data.children.forEach((child) => {
      lines.push(
        child.name,
        `Birthdate: ${
          child.birthdate ? formatDate(child.birthdate) : "Not added"
        }`,
        `Strengths: ${child.strengths || "Not added"}`,
        `Support notes: ${child.supportNotes || "Not added"}`,
        ""
      );
    });
  }

  if (data.appointments) {
    lines.push("APPOINTMENTS", "------------");

    data.appointments.forEach((appointment) => {
      const child = state.children.find(
        (item) => item.id === appointment.childId
      );

      lines.push(
        `${formatDate(appointment.date)} ${formatTime(
          appointment.time
        )}`,
        `${titleCase(appointment.type)} — ${appointment.provider}`,
        `Child: ${child?.name || "Unknown"}`,
        `Location: ${appointment.location || "Not added"}`,
        `Notes: ${appointment.notes || "Not added"}`,
        ""
      );
    });
  }

  if (data.lessonProgress) {
    lines.push("LEARNING PROGRESS", "-----------------");

    Object.entries(data.lessonProgress).forEach(([id, progress]) => {
      lines.push(
        LESSONS[id]?.title || id,
        `Completed: ${progress.completed ? "Yes" : "No"}`,
        `Reflection: ${progress.reflection || "Not added"}`,
        ""
      );
    });
  }

  if (data.personalResources) {
    lines.push("SAVED RESOURCES", "---------------");

    data.personalResources.forEach((resource) => {
      lines.push(
        resource.name,
        `Category: ${titleCase(resource.category)}`,
        resource.description,
        resource.website || "",
        ""
      );
    });
  }

  return lines.join("\n");
}

function bindGlobalControls() {
  $("app-toast-close-button").addEventListener("click", hideToast);

  $("confirmation-cancel-button").addEventListener("click", () => {
    confirmationCallback = null;
    closeDialog($("confirmation-modal"));
  });

  $("confirmation-confirm-button").addEventListener("click", () => {
    const callback = confirmationCallback;
    confirmationCallback = null;
    closeDialog($("confirmation-modal"));
    if (callback) callback();
  });

  $("pin-unlock-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const input = $("pin-unlock-input");
    const valid = await verifyPin(input.value);

    if (valid) {
      $("pin-unlock-error").hidden = true;
      input.value = "";
      closeDialog($("pin-unlock-modal"));
      if (!state.onboardingComplete) openDialog($("onboarding-modal"));
    } else {
      $("pin-unlock-error").hidden = false;
      input.select();
    }
  });

  $("forgot-pin-button").addEventListener("click", openForgotPin);
  $("forgot-pin-close-button").addEventListener("click", closeForgotPin);
  $("forgot-pin-form").addEventListener("submit", resetPinWithRecoveryPhrase);
  $("forgot-pin-restore-button").addEventListener("click", () => $("forgot-pin-restore-input").click());
  $("forgot-pin-restore-input").addEventListener("change", restoreBackupFromLockScreen);
  $("forgot-pin-reset-app-button").addEventListener("click", resetLockedApp);

  document.addEventListener("click", (event) => {
    const childAppointment = event.target.closest(
      "#child-add-appointment-button"
    );

    if (childAppointment) {
      prepareAppointmentForm();
      const child = selectedChild();
      if (child) $("appointment-child-profile").value = child.id;
    }
  });
}

function renderAll() {
  populateChildSelects();
  renderHome();
  renderJournalHistory();
  renderCalendar();
  renderChildren();
  renderLearning();
  renderResources();
}

function renderHome() {
  const today = new Date();

  $("current-date-label").textContent = today.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric"
    }
  );

  renderAffirmation();
  renderNextAppointment();
  renderLearningProgress();

  $("home-location-summary").textContent =
    state.caregiver.city && state.caregiver.state
      ? `Showing support options for ${state.caregiver.city}, ${state.caregiver.state}.`
      : "Add your city and state to see relevant support resources.";
}

function renderAffirmation(forceNew = false) {
  const today = dateInputValue(new Date());
  const existing = state.currentAffirmation;

  if (
    !forceNew &&
    existing &&
    existing.date === today &&
    existing.faithMode === state.preferences.faithMode
  ) {
    displayAffirmation(existing);
    return;
  }

  const pool = state.preferences.faithMode
    ? [...AFFIRMATIONS.general, ...AFFIRMATIONS.faith]
    : AFFIRMATIONS.general;

  const recent = state.affirmationHistory.slice(-8);
  const available = pool.filter(
    (affirmation) => !recent.includes(affirmation)
  );
  const chosen = randomItem(available.length ? available : pool);

  state.currentAffirmation = {
    text: chosen,
    date: today,
    faithMode: state.preferences.faithMode,
    faith: AFFIRMATIONS.faith.includes(chosen)
  };

  state.affirmationHistory.push(chosen);
  state.affirmationHistory = state.affirmationHistory.slice(-20);
  saveState();
  displayAffirmation(state.currentAffirmation);
}

function displayAffirmation(affirmation) {
  $("daily-affirmation-output").textContent = affirmation.text;
  $("daily-affirmation-source").hidden = !affirmation.faith;
  $("daily-affirmation-source").textContent = affirmation.faith
    ? "Faith reflection"
    : "";
}

function renderNextAppointment() {
  const next = state.appointments
    .filter(
      (appointment) =>
        !appointment.completed &&
        appointmentDate(appointment) >= new Date()
    )
    .sort(sortAppointmentsAscending)[0];

  const output = $("next-appointment-output");

  if (!next) {
    output.className = "empty-state";
    output.innerHTML = "<p>No upcoming appointments have been added.</p>";
    return;
  }

  const child = state.children.find(
    (item) => item.id === next.childId
  );

  output.className = "";
  output.innerHTML = `
    <div class="appointment-card">
      <h4>${escapeHtml(titleCase(next.type))}</h4>
      <p><strong>${escapeHtml(next.provider)}</strong></p>
      <p>${escapeHtml(formatDate(next.date))} at ${escapeHtml(
        formatTime(next.time)
      )}</p>
      ${child ? `<p>${escapeHtml(child.name)}</p>` : ""}
    </div>
  `;
}

function applyStateToForms() {
  $("caregiver-display-name").value = state.caregiver.displayName;
  $("settings-city-input").value = state.caregiver.city;
  $("settings-state-select").value = state.caregiver.state;
  $("resource-city-input").value = state.caregiver.city;
  $("resource-state-select").value = state.caregiver.state;

  setCheckedValues("caregiver-roles", state.caregiver.roles);

  $("faith-mode-toggle").checked = state.preferences.faithMode;
  $("journal-reminder-toggle").checked =
    state.preferences.journalReminder;
  $("journal-reminder-time").value =
    state.preferences.journalReminderTime || "19:00";
  $("appointment-reminder-toggle").checked =
    state.preferences.appointmentReminder;
  $("appointment-reminder-lead").value =
    state.preferences.appointmentReminderLead || "1-day";
  $("pin-protection-toggle").checked =
    state.preferences.pinProtection;
  $("pin-settings-fields").hidden =
    !state.preferences.pinProtection;

  $("onboarding-display-name").value =
    state.caregiver.displayName;
  $("onboarding-city").value = state.caregiver.city;
  $("onboarding-state").value = state.caregiver.state;
  $("onboarding-faith-mode").checked =
    state.preferences.faithMode;

  setCheckedValues("onboarding-roles", state.caregiver.roles);
}

function populateChildSelects() {
  const selects = [
    $("journal-child-profile"),
    $("appointment-child-profile")
  ];

  selects.forEach((select) => {
    const current = select.value;
    const firstOption =
      select.id === "journal-child-profile"
        ? '<option value="">Not related to one child</option>'
        : '<option value="">Choose a child</option>';

    select.innerHTML =
      firstOption +
      state.children
        .map(
          (child) =>
            `<option value="${child.id}">${escapeHtml(
              child.name
            )}</option>`
        )
        .join("");

    if ([...select.options].some((option) => option.value === current)) {
      select.value = current;
    }
  });
}

function setDefaultDates() {
  setJournalDateTime();
  setChildDates();

  if (!$("appointment-date").value) {
    $("appointment-date").value = dateInputValue(new Date());
  }
}

function setJournalDateTime() {
  const now = new Date();

  if (!$("journal-entry-date").value) {
    $("journal-entry-date").value = dateInputValue(now);
  }

  if (!$("journal-entry-time").value) {
    $("journal-entry-time").value = timeInputValue(now);
  }
}

function setChildDates() {
  const today = dateInputValue(new Date());

  if (!$("child-observation-date").value) {
    $("child-observation-date").value = today;
  }

  if (!$("child-milestone-date").value) {
    $("child-milestone-date").value = today;
  }
}

function updateConnectionStatus() {
  const badge = $("connection-status");
  const online = navigator.onLine;

  badge.textContent = online ? "Online" : "Offline";
  badge.dataset.state = online ? "online" : "offline";
}

function updateCounter(inputId, counterId) {
  const input = $(inputId);
  const counter = $(counterId);

  if (input && counter) {
    counter.textContent = `${input.value.length} / ${input.maxLength}`;
  }
}

function confirmAction(title, message, callback) {
  confirmationCallback = callback;
  $("confirmation-modal-title").textContent = title;
  $("confirmation-modal-message").textContent = message;
  openDialog($("confirmation-modal"));
}

function showValidation(messages) {
  const summary = $("validation-summary");
  const list = $("validation-summary-list");

  list.innerHTML = messages
    .map((message) => `<li>${escapeHtml(message)}</li>`)
    .join("");

  summary.hidden = false;
  summary.focus();
  summary.scrollIntoView({ behavior: "smooth", block: "center" });
}

function clearValidation() {
  $("validation-summary").hidden = true;
  $("validation-summary-list").innerHTML = "";
}

function showToast(message, type = "success") {
  clearTimeout(toastTimer);

  const toast = $("app-toast");
  $("app-toast-message").textContent = message;

  toast.hidden = false;
  toast.className = `toast is-${type}`;
  toast.dataset.state = type;

  toastTimer = window.setTimeout(hideToast, 4500);
}

function hideToast() {
  clearTimeout(toastTimer);
  $("app-toast").hidden = true;
}

function setLoading(button, loading) {
  button.disabled = loading;
  button.classList.toggle("is-loading", loading);
  button.setAttribute("aria-busy", String(loading));
}

function selectedChild() {
  return state.children.find(
    (child) => child.id === state.selectedChildId
  );
}

function checkedValues(name) {
  return $$(`input[name="${name}"]:checked`).map(
    (input) => input.value
  );
}

function setCheckedValues(name, values) {
  const selected = new Set(values || []);

  $$(`input[name="${name}"]`).forEach((input) => {
    input.checked = selected.has(input.value);
  });
}

function addFavorite(id) {
  if (!state.favoriteResourceIds.includes(id)) {
    state.favoriteResourceIds.push(id);
  }
}

function removeFavorite(id) {
  state.favoriteResourceIds = state.favoriteResourceIds.filter(
    (item) => item !== id
  );
}

function appointmentDate(appointment) {
  return new Date(
    `${appointment.date}T${appointment.time || "00:00"}:00`
  );
}

function sortAppointmentsAscending(a, b) {
  return appointmentDate(a) - appointmentDate(b);
}

function sortJournalDescending(a, b) {
  return (
    new Date(`${b.date}T${b.time || "00:00"}`) -
    new Date(`${a.date}T${a.time || "00:00"}`)
  );
}

function hasPinCredential() {
  return Boolean(state.preferences.pinHash || state.preferences.pin);
}

async function createCredential(secret) {
  const saltBytes = crypto.getRandomValues(new Uint8Array(16));
  const salt = bytesToBase64(saltBytes);
  const hash = await hashSecret(secret, salt);
  return { salt, hash };
}

async function hashSecret(secret, salt) {
  if (!window.crypto?.subtle) throw new Error("Web Crypto unavailable");
  const encoded = new TextEncoder().encode(`${salt}:${secret}`);
  const digest = await crypto.subtle.digest("SHA-256", encoded);
  return bytesToBase64(new Uint8Array(digest));
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary);
}

async function verifyPin(pin) {
  if (state.preferences.pinHash && state.preferences.pinSalt) {
    try {
      return (await hashSecret(pin, state.preferences.pinSalt)) === state.preferences.pinHash;
    } catch {
      return false;
    }
  }
  return Boolean(state.preferences.pin) && pin === state.preferences.pin;
}

function normalizeRecoveryPhrase(value) {
  return String(value || "").trim().replace(/\s+/g, " ").toLowerCase();
}

function clearStoredSecurity() {
  state.preferences.pinProtection = false;
  state.preferences.pin = "";
  state.preferences.pinHash = "";
  state.preferences.pinSalt = "";
  state.preferences.recoveryHash = "";
  state.preferences.recoverySalt = "";
}

function clearSecurityInputs() {
  [
    "security-pin-input",
    "security-pin-confirm-input",
    "security-recovery-phrase-input",
    "security-recovery-phrase-confirm-input"
  ].forEach((id) => { if ($(id)) $(id).value = ""; });
}

function openForgotPin() {
  $("forgot-pin-form").reset();
  $("forgot-pin-error").hidden = true;
  $("recovery-phrase-section").hidden = !state.preferences.recoveryHash;
  closeDialog($("pin-unlock-modal"));
  openDialog($("forgot-pin-modal"));
}

function closeForgotPin() {
  closeDialog($("forgot-pin-modal"));
  openDialog($("pin-unlock-modal"));
  $("pin-unlock-input").focus();
}

async function resetPinWithRecoveryPhrase(event) {
  event.preventDefault();
  const error = $("forgot-pin-error");
  const phrase = normalizeRecoveryPhrase($("forgot-pin-recovery-input").value);
  const pin = $("forgot-pin-new-input").value;
  const confirmation = $("forgot-pin-confirm-input").value;

  if (!state.preferences.recoveryHash || !state.preferences.recoverySalt) {
    error.textContent = "No recovery phrase was configured for this PIN.";
    error.hidden = false;
    return;
  }
  if (!/^\d{4,6}$/.test(pin)) {
    error.textContent = "Enter a new PIN containing 4 to 6 digits.";
    error.hidden = false;
    return;
  }
  if (pin !== confirmation) {
    error.textContent = "The new PIN entries do not match.";
    error.hidden = false;
    return;
  }

  try {
    const phraseHash = await hashSecret(phrase, state.preferences.recoverySalt);
    if (phraseHash !== state.preferences.recoveryHash) {
      error.textContent = "The recovery phrase is incorrect.";
      error.hidden = false;
      return;
    }
    const credential = await createCredential(pin);
    state.preferences.pin = "";
    state.preferences.pinHash = credential.hash;
    state.preferences.pinSalt = credential.salt;
    state.preferences.pinProtection = true;
    saveState();
    closeDialog($("forgot-pin-modal"));
    showToast("Your PIN was reset successfully.", "success");
  } catch {
    error.textContent = "PIN recovery is unavailable in this browser.";
    error.hidden = false;
  }
}

async function restoreBackupFromLockScreen(event) {
  const file = event.target.files?.[0];
  event.target.value = "";
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const restored = parsed.data || parsed;
    if (!restored || typeof restored !== "object" || !Array.isArray(restored.journalEntries) || !Array.isArray(restored.children)) {
      throw new Error("Invalid backup");
    }
    state = mergeState(restored);
    clearStoredSecurity();
    saveState();
    applyStateToForms();
    renderAll();
    closeDialog($("forgot-pin-modal"));
    showToast("Backup restored. PIN protection was turned off.", "success");
  } catch {
    $("forgot-pin-error").textContent = "The selected file is not a valid Autism Through Grace backup.";
    $("forgot-pin-error").hidden = false;
  }
}

function resetLockedApp() {
  closeDialog($("forgot-pin-modal"));
  confirmAction(
    "Erase Local App Data",
    "This permanently deletes all profiles, journal entries, appointments, resources, lesson progress, and settings stored on this device.",
    () => {
      localStorage.removeItem(STORAGE_KEY);
      state = structuredClone(DEFAULT_STATE);
      applyStateToForms();
      setDefaultDates();
      renderAll();
      closeAllDialogs();
      currentOnboardingStep = 1;
      showOnboardingStep(1);
      openDialog($("onboarding-modal"));
      showToast("Local app data was erased. You can start over now.", "success");
    }
  );
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? mergeState(saved) : structuredClone(DEFAULT_STATE);
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}

function mergeState(saved) {
  return {
    ...structuredClone(DEFAULT_STATE),
    ...saved,
    caregiver: {
      ...DEFAULT_STATE.caregiver,
      ...(saved.caregiver || {})
    },
    preferences: {
      ...DEFAULT_STATE.preferences,
      ...(saved.preferences || {})
    },
    children: Array.isArray(saved.children) ? saved.children : [],
    journalEntries: Array.isArray(saved.journalEntries)
      ? saved.journalEntries
      : [],
    appointments: Array.isArray(saved.appointments)
      ? saved.appointments
      : [],
    lessonProgress:
      saved.lessonProgress &&
      typeof saved.lessonProgress === "object"
        ? saved.lessonProgress
        : {},
    personalResources: Array.isArray(saved.personalResources)
      ? saved.personalResources
      : [],
    favoriteResourceIds: Array.isArray(saved.favoriteResourceIds)
      ? saved.favoriteResourceIds
      : [],
    affirmationHistory: Array.isArray(saved.affirmationHistory)
      ? saved.affirmationHistory
      : []
  };
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function createId(prefix) {
  if (crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random()
    .toString(36)
    .slice(2, 10)}`;
}

function dateInputValue(date) {
  const local = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  );
  return local.toISOString().slice(0, 10);
}

function timeInputValue(date) {
  return `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
}

function monthValue(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}`;
}

function formatDate(value) {
  if (!value) return "";

  return new Date(`${value}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
  });
}

function formatTime(value) {
  if (!value) return "";

  const [hours, minutes] = value.split(":").map(Number);
  return new Date(2000, 0, 1, hours, minutes).toLocaleTimeString(
    "en-US",
    {
      hour: "numeric",
      minute: "2-digit"
    }
  );
}

function formatAge(birthdate) {
  const birth = new Date(`${birthdate}T12:00:00`);
  const today = new Date();

  let age = today.getFullYear() - birth.getFullYear();
  const monthDifference = today.getMonth() - birth.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birth.getDate())
  ) {
    age -= 1;
  }

  return age >= 0 ? `${age} years old` : "Birthdate is in the future";
}

function formatPronouns(value) {
  const map = {
    "she-her": "She / her",
    "he-him": "He / him",
    "they-them": "They / them",
    other: "Other"
  };

  return map[value] || value;
}

function resourceScope(resource) {
  if (resource.scope === "personal") {
    const location = [resource.city, resource.state]
      .filter(Boolean)
      .join(", ");

    return location ? `Personal · ${location}` : "Personal";
  }

  return titleCase(resource.scope);
}

function titleCase(value) {
  return String(value || "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function formatList(values) {
  if (values.length === 1) return values[0];
  if (values.length === 2) return `${values[0]} and ${values[1]}`;

  return `${values.slice(0, -1).join(", ")}, and ${values.at(-1)}`;
}

function truncate(value, length) {
  const text = String(value || "");
  return text.length > length
    ? `${text.slice(0, length).trim()}…`
    : text;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickDistinct(items, count) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[randomIndex]] = [
      copy[randomIndex],
      copy[index]
    ];
  }

  return copy.slice(0, count);
}

function safeUrl(value) {
  try {
    const url = new URL(value);

    if (!["http:", "https:"].includes(url.protocol)) {
      return "#";
    }

    return url.href;
  } catch {
    return "#";
  }
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.append(textarea);
    textarea.select();

    const successful = document.execCommand("copy");
    textarea.remove();
    return successful;
  }
}

function downloadFile(filename, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();

  URL.revokeObjectURL(url);
}

function closeAllDialogs() {
  $$("dialog[open]").forEach((dialog) => dialog.close());
}