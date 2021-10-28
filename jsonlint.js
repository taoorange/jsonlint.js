export const jsonlint = (function() {
  let o = function(k, v, o, l) {
    for (o = o || {}, l = k.length; l--; o[k[l]] = v);
    return o
  }
  let $V0 = [1, 12]
  let $V1 = [1, 13]
  let $V2 = [1, 9]
  let $V3 = [1, 10]
  let $V4 = [1, 11]
  let $V5 = [1, 14]
  let $V6 = [1, 15]
  let $V7 = [14, 18, 22, 24]
  let $V8 = [18, 22]
  let $V9 = [22, 24]
  let parser = {
    trace: function trace() {},
    yy: {},
    symbols_: {
      error: 2,
      JSONString: 3,
      STRING: 4,
      JSONNumber: 5,
      NUMBER: 6,
      JSONNullLiteral: 7,
      NULL: 8,
      JSONBooleanLiteral: 9,
      TRUE: 10,
      FALSE: 11,
      JSONText: 12,
      JSONValue: 13,
      EOF: 14,
      JSONObject: 15,
      JSONArray: 16,
      '{': 17,
      '}': 18,
      JSONMemberList: 19,
      JSONMember: 20,
      ':': 21,
      ',': 22,
      '[': 23,
      ']': 24,
      JSONElementList: 25,
      $accept: 0,
      $end: 1,
    },
    terminals_: {
      2: 'error',
      4: 'STRING',
      6: 'NUMBER',
      8: 'NULL',
      10: 'TRUE',
      11: 'FALSE',
      14: 'EOF',
      17: '{',
      18: '}',
      21: ':',
      22: ',',
      23: '[',
      24: ']',
    },
    productions_: [
      0,
      [3, 1],
      [5, 1],
      [7, 1],
      [9, 1],
      [9, 1],
      [12, 2],
      [13, 1],
      [13, 1],
      [13, 1],
      [13, 1],
      [13, 1],
      [13, 1],
      [15, 2],
      [15, 3],
      [20, 3],
      [19, 1],
      [19, 3],
      [16, 2],
      [16, 3],
      [25, 1],
      [25, 3],
    ],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
      /* this == yyval */

      let $0 = $$.length - 1
      switch (yystate) {
        case 1:
          // replace escaped characters with actual character
          this.$ = yytext
            .replace(/\\(\\|")/g, '$' + '1')
            .replace(/\\n/g, '\n')
            .replace(/\\r/g, '\r')
            .replace(/\\t/g, '\t')
            .replace(/\\v/g, '\v')
            .replace(/\\f/g, '\f')
            .replace(/\\b/g, '\b')

          break
        case 2:
          if (yytext == String(Number(yytext))) {
            this.$ = Number(yytext)
          } else if (yytext.split('.') != undefined && yytext.split('.').length > 0 && yytext.split('.')[0] == String(Number(yytext))) {
            this.$ = Number(yytext)
          } else {
            this.$ = yytext
          }
          // this.$ = yytext == String(Number(yytext))? Number(yytext): yytext;
          break
        case 3:
          this.$ = null
          break
        case 4:
          this.$ = true
          break
        case 5:
          this.$ = false
          break
        case 6:
          return (this.$ = $$[$0 - 1])
        case 13:
          this.$ = {}
          break
        case 14:
        case 19:
          this.$ = $$[$0 - 1]
          break
        case 15:
          this.$ = [$$[$0 - 2], $$[$0]]
          break
        case 16:
          this.$ = {}
          this.$[$$[$0][0]] = $$[$0][1]
          break
        case 17:
          this.$ = $$[$0 - 2]
          $$[$0 - 2][$$[$0][0]] = $$[$0][1]
          break
        case 18:
          this.$ = []
          break
        case 20:
          this.$ = [$$[$0]]
          break
        case 21:
          this.$ = $$[$0 - 2]
          $$[$0 - 2].push($$[$0])
          break
      }
    },
    table: [
      { 3: 5, 4: $V0, 5: 6, 6: $V1, 7: 3, 8: $V2, 9: 4, 10: $V3, 11: $V4, 12: 1, 13: 2, 15: 7, 16: 8, 17: $V5, 23: $V6 },
      { 1: [3] },
      { 14: [1, 16] },
      o($V7, [2, 7]),
      o($V7, [2, 8]),
      o($V7, [2, 9]),
      o($V7, [2, 10]),
      o($V7, [2, 11]),
      o($V7, [2, 12]),
      o($V7, [2, 3]),
      o($V7, [2, 4]),
      o($V7, [2, 5]),
      o([14, 18, 21, 22, 24], [2, 1]),
      o($V7, [2, 2]),
      { 3: 20, 4: $V0, 18: [1, 17], 19: 18, 20: 19 },
      { 3: 5, 4: $V0, 5: 6, 6: $V1, 7: 3, 8: $V2, 9: 4, 10: $V3, 11: $V4, 13: 23, 15: 7, 16: 8, 17: $V5, 23: $V6, 24: [1, 21], 25: 22 },
      { 1: [2, 6] },
      o($V7, [2, 13]),
      { 18: [1, 24], 22: [1, 25] },
      o($V8, [2, 16]),
      { 21: [1, 26] },
      o($V7, [2, 18]),
      { 22: [1, 28], 24: [1, 27] },
      o($V9, [2, 20]),
      o($V7, [2, 14]),
      { 3: 20, 4: $V0, 20: 29 },
      { 3: 5, 4: $V0, 5: 6, 6: $V1, 7: 3, 8: $V2, 9: 4, 10: $V3, 11: $V4, 13: 30, 15: 7, 16: 8, 17: $V5, 23: $V6 },
      o($V7, [2, 19]),
      { 3: 5, 4: $V0, 5: 6, 6: $V1, 7: 3, 8: $V2, 9: 4, 10: $V3, 11: $V4, 13: 31, 15: 7, 16: 8, 17: $V5, 23: $V6 },
      o($V8, [2, 17]),
      o($V8, [2, 15]),
      o($V9, [2, 21]),
    ],
    defaultActions: { 16: [2, 6] },
    parseError: function parseError(str, hash) {
      if (hash.recoverable) {
        this.trace(str)
      } else {
        let error = new Error(str)
        error.hash = hash
        throw error
      }
    },
    parse: function parse(input) {
      let self = this
      let stack = [0]
      let tstack = []
      let vstack = [null]
      let lstack = []
      let { table } = this
      let yytext = ''
      let yylineno = 0
      let yyleng = 0
      let recovering = 0
      let TERROR = 2
      let EOF = 1
      let args = lstack.slice.call(arguments, 1)
      let lexer = Object.create(this.lexer)
      let sharedState = { yy: {} }
      for (let k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
          sharedState.yy[k] = this.yy[k]
        }
      }
      lexer.setInput(input, sharedState.yy)
      sharedState.yy.lexer = lexer
      sharedState.yy.parser = this
      if (typeof lexer.yylloc === 'undefined') {
        lexer.yylloc = {}
      }
      let yyloc = lexer.yylloc
      lstack.push(yyloc)
      let ranges = lexer.options && lexer.options.ranges
      if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError
      } else {
        this.parseError = Object.getPrototypeOf(this).parseError
      }
      function popStack(n) {
        stack.length -= 2 * n
        vstack.length -= n
        lstack.length -= n
      }
      let lex = function() {
        let token
        token = lexer.lex() || EOF
        if (typeof token !== 'number') {
          token = self.symbols_[token] || token
        }
        return token
      }
      let symbol
      let preErrorSymbol
      let state
      let action
      let a
      let r
      let yyval = {}
      let p
      let len
      let newState
      let expected
      while (true) {
        state = stack[stack.length - 1]
        if (this.defaultActions[state]) {
          action = this.defaultActions[state]
        } else {
          if (symbol === null || typeof symbol === 'undefined') {
            symbol = lex()
          }
          action = table[state] && table[state][symbol]
        }
        if (typeof action === 'undefined' || !action.length || !action[0]) {
          let errStr = ''
          expected = []
          for (p in table[state]) {
            if (this.terminals_[p] && p > TERROR) {
              expected.push(`'${this.terminals_[p]}'`)
            }
          }
          if (lexer.showPosition) {
            errStr = `Parse error on line ${
              yylineno + 1
            }:\n${
              lexer.showPosition()
            }\nExpecting ${
              expected.join(', ')
            }, got '${
              this.terminals_[symbol] || symbol
            }'`
          } else {
            errStr = `Parse error on line ${
              yylineno + 1
            }: Unexpected ${
              symbol == EOF ? 'end of input' : `'${this.terminals_[symbol] || symbol}'`}`
          }
          this.parseError(errStr, {
            text: lexer.match,
            token: this.terminals_[symbol] || symbol,
            line: lexer.yylineno,
            loc: yyloc,
            expected,
          })
        }
        if (action[0] instanceof Array && action.length > 1) {
          throw new Error(`Parse Error: multiple actions possible at state: ${state}, token: ${symbol}`)
        }
        switch (action[0]) {
          case 1:
            stack.push(symbol)
            vstack.push(lexer.yytext)
            lstack.push(lexer.yylloc)
            stack.push(action[1])
            symbol = null
            if (!preErrorSymbol) {
              yyleng = lexer.yyleng
              yytext = lexer.yytext
              yylineno = lexer.yylineno
              yyloc = lexer.yylloc
              if (recovering > 0) {
                recovering--
              }
            } else {
              symbol = preErrorSymbol
              preErrorSymbol = null
            }
            break
          case 2:
            len = this.productions_[action[1]][1]
            yyval.$ = vstack[vstack.length - len]
            yyval._$ = {
              first_line: lstack[lstack.length - (len || 1)].first_line,
              last_line: lstack[lstack.length - 1].last_line,
              first_column: lstack[lstack.length - (len || 1)].first_column,
              last_column: lstack[lstack.length - 1].last_column,
            }
            if (ranges) {
              yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]]
            }
            r = this.performAction.apply(yyval, [yytext, yyleng, yylineno, sharedState.yy, action[1], vstack, lstack].concat(args))
            if (typeof r !== 'undefined') {
              return r
            }
            if (len) {
              stack = stack.slice(0, -1 * len * 2)
              vstack = vstack.slice(0, -1 * len)
              lstack = lstack.slice(0, -1 * len)
            }
            stack.push(this.productions_[action[1]][0])
            vstack.push(yyval.$)
            lstack.push(yyval._$)
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]]
            stack.push(newState)
            break
          case 3:
            return true
        }
      }
    },
  }
  /* generated by jison-lex 0.3.4 */
  let lexer = (function() {
    let lexer = {
      EOF: 1,

      parseError: function parseError(str, hash) {
        if (this.yy.parser) {
          this.yy.parser.parseError(str, hash)
        } else {
          throw new Error(str)
        }
      },

      // resets the lexer, sets new input
      setInput(input, yy) {
        this.yy = yy || this.yy || {}
        this._input = input
        this._more = this._backtrack = this.done = false
        this.yylineno = this.yyleng = 0
        this.yytext = this.matched = this.match = ''
        this.conditionStack = ['INITIAL']
        this.yylloc = {
          first_line: 1,
          first_column: 0,
          last_line: 1,
          last_column: 0,
        }
        if (this.options.ranges) {
          this.yylloc.range = [0, 0]
        }
        this.offset = 0
        return this
      },

      // consumes and returns one char from the input
      input() {
        let ch = this._input[0]
        this.yytext += ch
        this.yyleng++
        this.offset++
        this.match += ch
        this.matched += ch
        let lines = ch.match(/(?:\r\n?|\n).*/g)
        if (lines) {
          this.yylineno++
          this.yylloc.last_line++
        } else {
          this.yylloc.last_column++
        }
        if (this.options.ranges) {
          this.yylloc.range[1]++
        }

        this._input = this._input.slice(1)
        return ch
      },

      // unshifts one char (or a string) into the input
      unput(ch) {
        let len = ch.length
        let lines = ch.split(/(?:\r\n?|\n)/g)

        this._input = ch + this._input
        this.yytext = this.yytext.substr(0, this.yytext.length - len)
        // this.yyleng -= len;
        this.offset -= len
        let oldLines = this.match.split(/(?:\r\n?|\n)/g)
        this.match = this.match.substr(0, this.match.length - 1)
        this.matched = this.matched.substr(0, this.matched.length - 1)

        if (lines.length - 1) {
          this.yylineno -= lines.length - 1
        }
        let r = this.yylloc.range

        this.yylloc = {
          first_line: this.yylloc.first_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.first_column,
          last_column: lines
            ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length
            : this.yylloc.first_column - len,
        }

        if (this.options.ranges) {
          this.yylloc.range = [r[0], r[0] + this.yyleng - len]
        }
        this.yyleng = this.yytext.length
        return this
      },

      // When called from action, caches matched text and appends it on next action
      more() {
        this._more = true
        return this
      },

      // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
      reject() {
        if (this.options.backtrack_lexer) {
          this._backtrack = true
        } else {
          return this.parseError(
            `Lexical error on line ${
              this.yylineno + 1
            }. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n${
              this.showPosition()}`,
            {
              text: '',
              token: null,
              line: this.yylineno,
            }
          )
        }
        return this
      },

      // retain first n characters of the match
      less(n) {
        this.unput(this.match.slice(n))
      },

      // displays already matched input, i.e. for error messages
      pastInput() {
        let past = this.matched.substr(0, this.matched.length - this.match.length)
        return (past.length > 20 ? '...' : '') + past.substr(-20).replace(/\n/g, '')
      },

      // displays upcoming input, i.e. for error messages
      upcomingInput() {
        let next = this.match
        if (next.length < 20) {
          next += this._input.substr(0, 20 - next.length)
        }
        return (next.substr(0, 20) + (next.length > 20 ? '...' : '')).replace(/\n/g, '')
      },

      // displays the character position where the lexing error occurred, i.e. for error messages
      showPosition() {
        let pre = this.pastInput()
        let c = new Array(pre.length + 1).join('-')
        return `${pre + this.upcomingInput()}\n${c}^`
      },

      // test the lexed token: return FALSE when not a match, otherwise return token
      test_match(match, indexed_rule) {
        let token; let lines; let
          backup

        if (this.options.backtrack_lexer) {
          // save context
          backup = {
            yylineno: this.yylineno,
            yylloc: {
              first_line: this.yylloc.first_line,
              last_line: this.last_line,
              first_column: this.yylloc.first_column,
              last_column: this.yylloc.last_column,
            },
            yytext: this.yytext,
            match: this.match,
            matches: this.matches,
            matched: this.matched,
            yyleng: this.yyleng,
            offset: this.offset,
            _more: this._more,
            _input: this._input,
            yy: this.yy,
            conditionStack: this.conditionStack.slice(0),
            done: this.done,
          }
          if (this.options.ranges) {
            backup.yylloc.range = this.yylloc.range.slice(0)
          }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g)
        if (lines) {
          this.yylineno += lines.length
        }
        this.yylloc = {
          first_line: this.yylloc.last_line,
          last_line: this.yylineno + 1,
          first_column: this.yylloc.last_column,
          last_column: lines
            ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length
            : this.yylloc.last_column + match[0].length,
        }
        this.yytext += match[0]
        this.match += match[0]
        this.matches = match
        this.yyleng = this.yytext.length
        if (this.options.ranges) {
          this.yylloc.range = [this.offset, (this.offset += this.yyleng)]
        }
        this._more = false
        this._backtrack = false
        this._input = this._input.slice(match[0].length)
        this.matched += match[0]
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1])
        if (this.done && this._input) {
          this.done = false
        }
        if (token) {
          return token
        } if (this._backtrack) {
          // recover context
          for (let k in backup) {
            this[k] = backup[k]
          }
          return false // rule action called reject() implying the next rule should be tested instead.
        }
        return false
      },

      // return next match in input
      next() {
        if (this.done) {
          return this.EOF
        }
        if (!this._input) {
          this.done = true
        }

        let token; let match; let tempMatch; let
          index
        if (!this._more) {
          this.yytext = ''
          this.match = ''
        }
        let rules = this._currentRules()
        for (let i = 0; i < rules.length; i++) {
          tempMatch = this._input.match(this.rules[rules[i]])
          if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
            match = tempMatch
            index = i
            if (this.options.backtrack_lexer) {
              token = this.test_match(tempMatch, rules[i])
              if (token !== false) {
                return token
              } if (this._backtrack) {
                match = false
                continue // rule action called reject() implying a rule MISmatch.
              } else {
                // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                return false
              }
            } else if (!this.options.flex) {
              break
            }
          }
        }
        if (match) {
          token = this.test_match(match, rules[index])
          if (token !== false) {
            return token
          }
          // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
          return false
        }
        if (this._input === '') {
          return this.EOF
        }
        return this.parseError(`Lexical error on line ${this.yylineno + 1}. Unrecognized text.\n${this.showPosition()}`, {
          text: '',
          token: null,
          line: this.yylineno,
        })
      },

      // return next match that has a token
      lex: function lex() {
        let r = this.next()
        if (r) {
          return r
        }
        return this.lex()
      },

      // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
      begin: function begin(condition) {
        this.conditionStack.push(condition)
      },

      // pop the previously active lexer condition state off the condition stack
      popState: function popState() {
        let n = this.conditionStack.length - 1
        if (n > 0) {
          return this.conditionStack.pop()
        }
        return this.conditionStack[0]
      },

      // produce the lexer rule set which is active for the currently active lexer condition state
      _currentRules: function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
          return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
        }
        return this.conditions.INITIAL.rules
      },

      // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
      topState: function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0)
        if (n >= 0) {
          return this.conditionStack[n]
        }
        return 'INITIAL'
      },

      // alias for begin(condition)
      pushState: function pushState(condition) {
        this.begin(condition)
      },

      // return the number of states currently on the stack
      stateStackSize: function stateStackSize() {
        return this.conditionStack.length
      },
      options: {},
      performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {
        let YYSTATE = YY_START
        switch ($avoiding_name_collisions) {
          case 0 /* skip whitespace */:
            break
          case 1:
            return 6
          case 2:
            yy_.yytext = yy_.yytext.substr(1, yy_.yyleng - 2)
            return 4
          case 3:
            return 17
          case 4:
            return 18
          case 5:
            return 23
          case 6:
            return 24
          case 7:
            return 22
          case 8:
            return 21
          case 9:
            return 10
          case 10:
            return 11
          case 11:
            return 8
          case 12:
            return 14
          case 13:
            return 'INVALID'
        }
      },
      rules: [
        /^(?:\s+)/,
        /^(?:(-?([0-9]|[1-9][0-9]+))(\.[0-9]+)?([eE][-+]?[0-9]+)?\b)/,
        /^(?:"(?:\\[\\"bfnrt/]|\\u[a-fA-F0-9]{4}|[^\\\0-\x09\x0a-\x1f"])*")/,
        /^(?:\{)/,
        /^(?:\})/,
        /^(?:\[)/,
        /^(?:\])/,
        /^(?:,)/,
        /^(?::)/,
        /^(?:true\b)/,
        /^(?:false\b)/,
        /^(?:null\b)/,
        /^(?:$)/,
        /^(?:.)/,
      ],
      conditions: { INITIAL: { rules: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], inclusive: true } },
    }
    return lexer
  }())
  parser.lexer = lexer
  function Parser() {
    this.yy = {}
  }
  Parser.prototype = parser
  parser.Parser = Parser
  return new Parser()
}())

if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
  exports.parser = jsonlint
  exports.Parser = jsonlint.Parser
  exports.parse = function() {
    return jsonlint.parse.apply(jsonlint, arguments)
  }
  exports.main = function commonjsMain(args) {
    if (!args[1]) {
      console.log(`Usage: ${args[0]} FILE`)
      process.exit(1)
    }
    let source = require('fs').readFileSync(require('path').normalize(args[1]), 'utf8')
    return exports.parser.parse(source)
  }
  if (typeof module !== 'undefined' && require.main === module) {
    exports.main(process.argv.slice(1))
  }
}
